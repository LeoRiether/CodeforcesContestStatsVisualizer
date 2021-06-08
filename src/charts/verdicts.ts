import { Submission } from '../api_interfaces';
import * as chart from 'chart.js';
import groupBy from 'lodash/groupBy';
import { color, colorFor } from '../util';

export default function verdicts(status: Submission[]): chart.ChartConfiguration  {
    let groups = Object.entries(groupBy(status, sub => sub.verdict));

    const labels = groups.map(([label, _]) => label);
    const data = groups.map(([_, subs]) => subs.length);
    const backgroundColor = labels.map(l => colorFor[l] || color.random());

    return {
        type: 'doughnut',
        data: {
            labels,
            datasets: [{
                label: "Contest Verdicts",
                data,
                backgroundColor,
                hoverOffset: 10,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
        }
    };
}