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
};

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

    let status = await api.contest_status(creds, '329742');
    status = status
        .filter(is_submission_from_contestant);

    // Make the graphs!
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
}

main();


