import React, { useState, useEffect } from 'react';
import '../css/Alleaufgaben.css';
import Kalendarmodale from './Kalendarmodal';
import { Pie } from 'react-chartjs-2';
import Modale from './Modale';
import axios from 'axios';

// chrtsjs in reactjs

//defaults.global.tooltips.enabled = false;
//defaults.global.labels.display = 'false';
// const data1 = {
//    //labels: [ "Alleaufgaben",'Ausstehend', 'Fertig', 'In Bearbeitung'],
//    datasets: [
//       {
//          label: '# of votes',
//          data: ['5', '5', '5', '25'],
//          backgroundColor: [
//             'rgba(44, 192, 156, 1)',
//             'rgba(90, 85, 202, 1)',
//             'rgba(242, 105, 80, 1)',
//             'rgba(255,255,255,1)',
//          ],
//          borderWidth: 1,
//       },
//    ],
// };

const Aufgaben = () => {
   const { reveals, toggle } = Kalendarmodale();

   const [pieData, setPieData] = useState(null);

   const [data, setData] = useState(null);
   const [idCheck, setIdCheck] = useState(null)

   const toggleAufgabe = (event) => {
      setIdCheck(event.target.id)
      toggle()
      // console.log(event)
      // console.log(event.target.id)
   }

   const calculatePie = (inputData) => {
      if (!inputData) {
         return
      }

      let total = inputData.length;
      let erledigten = inputData.filter((aufgabe) => aufgabe.kategorie === 'Fertig').length;
      let inBearbeitung = inputData.filter((aufgabe) => aufgabe.kategorie === 'In Bearbeitung').length;
      let aufstehenden = inputData.filter((aufgabe) => aufgabe.kategorie === 'Ausstehend').length;

      let dataset = [aufstehenden, inBearbeitung, erledigten, total];

      let newPieData = {
         //         labels: ['Ausstehend', 'In Bearbeitung', 'Fertig'],
         datasets: [
            {
               label: '# of votes',
               data: dataset,
               backgroundColor: [
                  'rgba(242, 105, 80, 1)',
                  'rgba(44, 192, 156, 1)',
                  'rgba(90, 85, 202, 1)',
                  'rgba(255,255,255,1)',
               ],
               borderWidth: 1,
            },
         ],
      };
      setPieData(newPieData)
   }

   useEffect(() => {
      axios
         .get('/api/aufgabe')
         .then((result) => {
            setData(result.data)
            calculatePie(result.data)
         })
         .catch((err) => console.log(err));
   }, []);


   return (
      <div className="Alleaufgaben">
         <div className="PieChart">
            <div style={{ height: '200px', width: '200px' }}>
               <Pie
                  data={pieData}
                  options={{
                     responsive: true,
                     title: { text: '# of votes' },
                  }}
               />
            </div>
         </div>

         <Accordion title="Alle Aufgaben">
            {data &&
               data.map((ele) => (
                  <div key={ele._id}>
                     <input type="checkbox" /> {ele.name}{' '}
                     < img src="/img/info.png" alt="" onClick={toggleAufgabe} id={ele._id} />
                     {/* <button className="btnInfo" onClick={toggleAufgabe} id={ele._id}>
                        i
                     </button> */}
                  </div>
               ))}
         </Accordion>

         <Modale reveals={reveals} hidden={toggle} currentId={idCheck} />
      </div>
   );
};

// Accordion
const Accordion = ({ children, title, isExpand = false }) => {
   const [expand, setExpand] = useState(isExpand);
   return (
      <div className="box">
         <div
            className="title-box"
            onClick={() => setExpand((expand) => !expand)}
         >
            <span className="title">{title}</span>

            <div className="clearfix"></div>
         </div>
         {expand && <div className="content">{children}</div>}
      </div>
   );
};

export default Aufgaben;
