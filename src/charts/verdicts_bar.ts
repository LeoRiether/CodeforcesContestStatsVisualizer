import { Submission } from '../api_interfaces';
import * as chart from 'chart.js';
import groupBy from 'lodash/groupBy';
import { color, colorFor } from '../util';

export default function verdicts_bar(status: Submission[]) {

}

// export default function verdicts_bar(status: Submission[]): chart.ChartConfiguration  {
//     let groups = Object.entries(groupBy(status, sub => sub.problem.name));

//     const labels = groups.map(([problemName, _]) => problemName);
//     const problem_submissions = groups.map(([_, subs]) => subs);

//     // const datasets = problem_submissions.map(subs => {
//     //     const groups = Object.entries();
//     // });

//     const backgroundColor = labels.map(l => colorFor[l] || color.random());

//     return {
//         type: 'doughnut',
//         data: {
//             labels,
//             datasets: [{
//                 label: "Contest Verdicts",
//                 data,
//                 backgroundColor,
//                 hoverOffset: 10,
//             }]
//         },
//         options: {
//             responsive: true,
//             maintainAspectRatio: false,
//         }
//     };
// }