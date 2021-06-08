
const api_base = 'https://codeforces.com/api';

export interface StrDict {
    [key:string]: string;
}

export interface Creds {
    key: string;
    secret: string;
}

const rand_hex = () =>
    (~~(Math.random() * 16)).toString(16);

const sha512 : (str: string) => Promise<string> = str =>
  crypto.subtle.digest("SHA-512", new TextEncoder().encode(str))
  .then(buf =>
    Array.prototype.map.call(new Uint8Array(buf), (x:number)=>(('00'+x.toString(16)).slice(-2))).join(''));

async function api_sig(request_base: string, secret: string): Promise<string> {
    const rand = new Array(6).fill(null).map(rand_hex).join('');
    const thingy = `${rand}/${request_base}#${secret}`;
    return rand + (await sha512(thingy));
}

async function request(creds: Creds, method: string, params: StrDict): Promise<any> {
    params['time'] = (~~(new Date().getTime() / 1000)).toString();
    params['apiKey'] = creds.key;

    let param_list = Object.entries(params);
    param_list.sort(); // This might work

    const request_base = method + '?' + param_list.map(([key, value]) => `${key}=${value}`).join('&');
    const signature = await api_sig(request_base, creds.secret);
    const request_url = `${api_base}/${request_base}&apiSig=${signature}`;

    const response = await fetch(request_url).then(res => res.json());
    if (response['status'] != 'OK')
        throw `The Codeforces API returned status ${response['status']}. Full response: ${JSON.stringify(response)}`;

    return response['result'];
}

export function contest_status(creds: Creds, contestId: string): Promise<StrDict> {
    return request(creds, 'contest.status', { contestId });
}