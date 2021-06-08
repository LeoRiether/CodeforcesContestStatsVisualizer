import * as api from './api';
async function main() {
    if (localStorage.getItem('cf_key') === null || localStorage.getItem('cf_secret') === null) {
        localStorage.setItem('cf_key', prompt('Your API key'));
        localStorage.setItem('cf_secret', prompt('Your API secret'));
    }

    // Yeah, an extension or userscript could easily get hold of these
    let creds: api.Creds = {
        key: localStorage.getItem('cf_key'),
        secret: localStorage.getItem('cf_secret'),
    };

    let res = await api.contest_status(creds, '329742');
    document.write(JSON.stringify(res));
}

main();


