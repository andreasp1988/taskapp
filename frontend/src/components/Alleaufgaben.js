import React, { useState } from 'react';
import '../css/Alleaufgaben.css';
import Kalendarmodale from './Kalendarmodal';
import { Pie } from 'react-chartjs-2';
import Modale from './Modale';

// chrtsjs in reactjs

//defaults.global.tooltips.enabled = false;
//defaults.global.labels.display = 'false';
const data = {
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

   return (
      <div className="Alleaufgaben">
         <div className="PieChart">
            <div style={{ height: '200px', width: '200px' }}>
               <Pie

                  data={data}
                  options={{
                     responsive: true,
                     title: { text: '# of votes' },
                  }}
               />
            </div>
         </div>

         <Accordion title="Alle Aufgaben">
            <input type="checkbox" />
            <label>
               Wäsche aufhängen{' '}
               <button className="btnInfo" onClick={toggle}>
                  i
               </button>
            </label>
            <br />
            <input type="checkbox" />
            <label>
               Einkaufen gehen{' '}
               <button className="btnInfo" onClick={toggle}>
                  i
               </button>
            </label>
            <br />
            <input type="checkbox" />
            <label>
               Javascript lernen{' '}
               <button className="btnInfo" onClick={toggle}>
                  i
               </button>
            </label>
            <br />
            <input type="checkbox" />
            <label>
               Finn und Georg ärgern{' '}
               <button className="btnInfo" onClick={toggle}>
                  i
               </button>
            </label>
            <br />
            <input type="checkbox" />
            <label>
               Katze füttern{' '}
               <button className="btnInfo" onClick={toggle}>
                  i
               </button>
            </label>
            <br />
            <input type="checkbox" />
            <label>
               Kleiderschrank aussortieren{' '}
               <button className="btnInfo" onClick={toggle}>
                  i
               </button>
            </label>
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
