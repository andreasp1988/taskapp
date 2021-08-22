// import React, { useEffect, useRef,useState} from 'react';
// import { Pie} from 'react-chartjs-2';
// //import Buttons from './Buttons';
// import Alleaufgaben from "./Alleaufgaben"
// //import Chartjs from "chart.js";
// import Buttons from './Buttons';

// // defaults.global.tooltips.enabled = false;
// //defaults.global.labels.display = 'false';


// const randomInt = () => Math.floor(Math.random() * (10 - 1 + 1)) + 1;

// const chartConfig ={
//     type:"pie",
//     data: {
//     //labels: [ "Alleaufgaben",'Ausstehend', 'Fertig', 'In Bearbeitung'],
//     datasets: [
//        {
//           //label: '# of votes',
//           data: ["5","5", "5", "25"],
//           backgroundColor: [
//              'rgba(75, 192, 192, 1)',
//              'rgba(153, 102, 255, 1)',
//              'rgba(255, 159, 64, 1)',
//              'rgba(255,255,255,1)'
 
//           ],
//           borderWidth:1
//        },
  
//     ],
 
//     }
   
 
//  }

//  const PieChart =() => {

//     // for chartjs event

//    const chartContainer = useRef(null);
//    const [chartInstance, setChartInstance] = useState(null);
 
//    useEffect(() => {
//      if (chartContainer && chartContainer.current) {
//        const newChartInstance = new Chartjs(chartContainer.current, chartConfig);
//        setChartInstance(newChartInstance);
//      }
//    }, [chartContainer]);
 
//    const updateDataset = (datasetIndex, newData) => {
//      chartInstance.data.datasets[datasetIndex].data = newData;
//      chartInstance.update();
//    };
 
//    const onBtn1 = () => {
//      const data = [
           
           
//             0,
//             0,
//             0,
//        randomInt()
//      ];
//      updateDataset(0, data);
//    };
   
//    const onBtn2 = () => {
//       const data = [
        
        
//          0,
//          randomInt(),
//          0,
//          0
//       ];
//       updateDataset(0, data);
//     };
    
//    const onBtn3 = () => {
//       const data = [
//         randomInt(),
//             0,
//             0,
//             0,
//       ];
//       updateDataset(0, data);
//     };
  
//  return(
//      <div className="pieChar">
//           <div className="PieChart">
//             <div style={{height:"150px",width:"150px"}}>
//                <Pie data={chartConfig} options={{
//                   responsive:true,
//                   title:{text:"# of votes"}
//                }}/>
//             </div>
//          </div>

//          <Alleaufgaben/>
//          <Buttons>
//              {onBtn1}
//              {onBtn2}
//              {onBtn3}
//          </Buttons>
        


         
//          <canvas ref={chartContainer} />
//      </div>
//  )



//  }

//   export default PieChart;
 
 