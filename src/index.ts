import * as api from './api';
import { Submission } from './api_interfaces';
import Chart  from 'chart.js/auto';
import * as chart from 'chart.js';

import verdicts from './charts/verdicts';
import verdicts_per_problem from './charts/verdicts_per_problem';
import submissions_time from './charts/submissions_time';
import submissions_lang from './charts/submissions_lang';

const is_submission_from_contestant : (s: Submission) => boolean =
    s => s.author.participantType == "CONTESTANT";

function make_canvas(attrs: object, parent?: Element): HTMLCanvasElement {
    let canvas = document.createElement("canvas");
    for (let key in attrs)
        if (attrs.hasOwnProperty(key))
            canvas.setAttribute(key, attrs[key]);

    if (parent !== undefined)
        parent.appendChild(canvas);

    return canvas;
}

function make_chart(data: chart.ChartConfiguration,
                    canvas_attr: object,
                    parent_element: Element) {

    let canvas = make_canvas(canvas_attr, parent_element);
    new Chart(canvas, data);
}

const $ = {
    id(id: string) { return document.getElementById(id); },
    q(query: string) { return document.querySelector(query); },
    qa(query: string) { return document.querySelectorAll(query); },
};

function make_all_charts(status: Submission[]) {
    make_chart(
        verdicts(status),
        { 'id': 'verdicts-canvas', 'style': 'height: 360px;' },
        $.q('#verdicts'),
    );

    make_chart(
        verdicts_per_problem(status),
        { 'id': 'verdicts-per-problem-canvas', 'style': 'height: 550px;' },
        $.q('#verdicts-per-problem'),
    );

    make_chart(
        submissions_time(status),
        { 'id': 'submissions-time-canvas', 'style': 'height: 600px;' },
        $.q('#submissions-time'),
    );

    make_chart(
        submissions_time(status.filter(sub => sub.verdict == "OK")),
        { 'id': 'acs-time-canvas', 'style': 'height: 600px;' },
        $.q('#acs-time'),
    );

    make_chart(
        submissions_lang(status),
        { 'id': 'subs-by-lang-canvas', 'style': 'height: 300px;' },
        $.q('#subs-by-lang'),
    );
}

function main(contestID: string) {
    // Yeah, an extension or userscript could easily get hold of these
    let creds: api.Creds = {
        key: localStorage.getItem('cf_key') || "",
        secret: localStorage.getItem('cf_secret') || "",
    };

    return api.contest_status(creds, contestID)
        .then(status => status.filter(is_submission_from_contestant))
        .then(make_all_charts)
        .catch(err => alert(err));
}

(function bind_events() {
    $.id('save-btn').addEventListener('click', () => {
        const key = ($.id('key-input') as HTMLInputElement).value;
        const secret = ($.id('secret-input') as HTMLInputElement).value;

        localStorage.setItem('cf_key', key);
        localStorage.setItem('cf_secret', secret);
    });

    ($.id('contest-id') as HTMLInputElement).value = localStorage.getItem('last_contest_id') || "";

    $.id('vis-btn').addEventListener('click', () => {
        const contestID = ($.id('contest-id') as HTMLInputElement).value;
        main(contestID);

        Array.from($.qa('.form')).forEach(el => el.remove());
        localStorage.setItem('last_contest_id', contestID);
        $.q('.dashboard').classList.remove('hidden');
    });
})();
