import * as api from './api';
import { Submission } from './api_interfaces';
import Chart from 'chart.js/auto';

import verdicts from './charts/verdicts';
import verdicts_per_problem from './charts/verdicts_per_problem';
import submissions_time from './charts/submissions_time';

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

const $ = {
    id(id: string) { return document.getElementById(id); },
    q(query: string) { return document.querySelector(query); },
    qa(query: string) { return document.querySelectorAll(query); },
};

function make_all_charts(status: Submission[]) {
    let verdicts_canvas = make_canvas(
        { 'id': 'verdicts-canvas', 'style': 'height: 360px;' },
        $.q('#verdicts'));

    new Chart(verdicts_canvas, verdicts(status));

    let verdicts_per_problem_canvas = make_canvas(
        { 'id': 'verdicts-per-problem-canvas', 'style': 'height: 600px;' },
        $.q('#verdicts-per-problem'));

    new Chart(verdicts_per_problem_canvas, verdicts_per_problem(status));

    let submissions_time_canvas = make_canvas(
        { 'id': 'submissions-time-canvas', 'style': 'height: 600px;' },
        $.q('#submissions-time'));

    new Chart(submissions_time_canvas, submissions_time(status));

    let acs_time_canvas = make_canvas(
        { 'id': 'acs-time-canvas', 'style': 'height: 600px;' },
        $.q('#acs-time'));

    new Chart(acs_time_canvas, submissions_time(status.filter(sub => sub.verdict == "OK")));
}

function main(contestID: string) {
    // Yeah, an extension or userscript could easily get hold of these
    let creds: api.Creds = {
        key: localStorage.getItem('cf_key'),
        secret: localStorage.getItem('cf_secret'),
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
