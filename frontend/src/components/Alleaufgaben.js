import React, { useState, useEffect } from 'react';
import '../css/Alleaufgaben.css';
import Kalendarmodale from './Kalendarmodal';
import { Pie } from 'react-chartjs-2';
import Modale from './Modale';
import axios from 'axios';

// chrtsjs in reactjs

//defaults.global.tooltips.enabled = false;
//defaults.global.labels.display = 'false';
const data1 = {
   //labels: [ "Alleaufgaben",'Ausstehend', 'Fertig', 'In Bearbeitung'],
   datasets: [
      {
         label: '# of votes',
         data: ['5', '5', '5', '25'],
         backgroundColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255,255,255,1)',
         ],
         borderWidth: 1,
      },
   ],
};

const Aufgaben = () => {
   const { reveals, toggle } = Kalendarmodale();

   const [data, setData] = useState(null);
   useEffect(() => {
      axios
         .get('/api/aufgabe')
         .then((result) => setData(result.data))
         .catch((err) => console.log(err));
   }, []);

   return (
      <div className="Alleaufgaben">
         <div className="PieChart">
            <div style={{ height: '200px', width: '200px' }}>
               <Pie
<<<<<<< HEAD

                  data={data}
=======
                  data={data1}
>>>>>>> 343f2a64142c56c531d43c23b651b59ebdc0b88e
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
                     <button className="btnInfo" onClick={toggle}>
                        i
                     </button>
                  </div>
               ))}
         </Accordion>

         <Modale reveals={reveals} hidden={toggle} />
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
