import React, { useState } from 'react';
import 'aufgaben.css';

const Aufgaben = () => {
   return (
      <div className="App">
         <Accordion title="Alle Aufgaben">
            <form>
               <input type="checkbox" />
               <label>Wäsche aufhängen</label>
               <input type="checkbox" />
               <label>Einkaufen gehen</label>
               <input type="checkbox" />
               <label>Javascript lernen</label>
               <input type="checkbox" />
               <label>php mal angucken</label>
               <input type="checkbox" />
               <label>Katze füttern</label>
               <input type="checkbox" />
               <label>Kleiderschrank aussortieren</label>
            </form>
         </Accordion>
      </div>
   );
};
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
