import { Submission } from '../api_interfaces';
import * as chart from 'chart.js';
import groupBy from 'lodash/groupBy';

export default function submissions_time(status: Submission[]): chart.ChartConfiguration  {
    const maxTime = status.reduce((acc, sub) => Math.max(acc, sub.relativeTimeSeconds), 0);
    const step = 5 * 60; // 5 minute intervals
    const times = new Array(Math.ceil(maxTime / step)).fill(0).map((_, i) => i * step / 60);

    let groups = Object.entries(groupBy(status, sub => sub.problem.index));
    groups.sort();

    const datasets = groups.map(([_, subs], index) => {
        const label = `${subs[0].problem.index} - ${subs[0].problem.name}`;
        const backgroundColor = `hsl(${index * 23}deg 60% 55% / 90%)`;

        let data = new Array(times.length).fill(0);
        for (let sub of subs) {
            let bucket = Math.floor(sub.relativeTimeSeconds / step);
            data[bucket]++;
        }

        return { label, backgroundColor, data, fill: true };
    });

    return {
        type: 'bar',
        data: {
            labels: times,
            datasets,
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Time (minutes)'
                    },
                    stacked: true,
                },
                y: {
                    title: {
                        display: true,
                        text: "Submissions"
                    },
                    stacked: true,
                }
            }
        }
    };
}
