import { Submission } from '../api_interfaces';
import * as chart from 'chart.js';
import groupBy from 'lodash/groupBy';
import { color, colorFor } from '../util';

export default function verdicts_per_problem(status: Submission[]): chart.ChartConfiguration  {
    let groups = Object.entries(groupBy(status, sub => sub.programmingLanguage));
    groups.sort();

    const languages = groups.map(([lang, _]) => lang);
    const data = groups.map(([_, subs]) => subs.length);

    return {
        type: 'bar',
        data: {
            labels: languages,
            datasets: [{
                label: "Submissions"
                data,
                backgroundColor: 'rgb(121 220 225 / 57%)',
            }],
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: 'y',
            scales: {
                x: {
                    stacked: true,
                    title: {
                        display: true,
                        text: "Submissions",
                    }
                 },
                y: {
                    stacked: true,
                    title: {
                        display: true,
                        text: "Language"
                    }
                },
            },
        }
    };
}