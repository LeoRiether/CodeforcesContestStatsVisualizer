import { Submission } from '../api_interfaces';
import * as chart from 'chart.js';
import groupBy from 'lodash/groupBy';
import { color, colorFor } from '../util';

// Pretty unreadable
export default function verdicts_per_problem(status: Submission[]): chart.ChartConfiguration  {
    const priority = { "OK": 1, "WRONG_ANSWER": 2, "TIME_LIMIT_EXCEEDED": 3,
                       "RUNTIME_ERROR": 4, "MEMORY_LIMIT_EXCEEDED": 5 };

    const verdict_groups = Object.entries(groupBy(status, sub => sub.verdict));
    verdict_groups.sort(([a, _], [b, __]) => (priority[a] || 100) - (priority[b] || 100));

    let problem_index_to_name = new Map(status.map(sub => [sub.problem.index, sub.problem.name]));
    let problem_entries = Array.from(problem_index_to_name.entries());
    problem_entries.sort();
    let problem_names = problem_entries.map(([index, name]) => `${index} - ${name}`);
    let index_to_index = new Map(problem_entries.map(([i,_], j) => [i, j])); // this is so confusing

    const datasets = verdict_groups.map(([verdict, subs]) => {
        const backgroundColor = colorFor[verdict] || color.random();
        const label = verdict;

        let data = new Array(index_to_index.size).fill(0);
        for (let sub of subs)
            data[index_to_index.get(sub.problem.index)]++;

        return {
            label,
            data,
            backgroundColor,
        }
    });

    return {
        type: 'bar',
        data: {
            labels: problem_names,
            datasets,
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            indexAxis: 'y',
            scales: {
                x: {stacked: true},
                y: {stacked: true},
            },
        }
    };
}