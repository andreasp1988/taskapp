import React from 'react';
import { Pie, defaults } from 'react-chartjs-2';

defaults.global.tooltips.enabled = false;
defaults.global.legend.position = 'bottom';

const PieChart = () => {
   return (
      <div>
         <Pie
            data={{
               labels: [ 'Ausstehend', 'Fertig', 'In Bearbeitung'],
               datasets: [
                  {
                     label: '# of votes',
                     data: [10, 10, 10],
                     backgroundColor: [
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                     ],
                     borderColor: [
                        'rgba(75, 192, 192, 1)',
                        'rgba(153, 102, 255, 1)',
                        'rgba(255, 159, 64, 1)',
                     ],
                     borderWidth: 1,
                  },
                  // {
                  //   label: 'Quantity',
                  //   data: [47, 52, 67, 58, 9, 50],
                  //   backgroundColor: 'orange',
                  //   borderColor: 'red',
                  // },
               ],
            }}
            height={400}
            width={600}
            options={{
               maintainAspectRatio: false,
               scales: {
                  yAxes: [
                     {
                        ticks: {
                           beginAtZero: true,
                        },
                     },
                  ],
               },
               legend: {
                  labels: {
                     fontSize: 25,
                  },
               },
            }}
         />
      </div>
   );
};

export default PieChart;
