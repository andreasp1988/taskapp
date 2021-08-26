import React, { useState, useEffect } from 'react';
import '../css/AusstehendAufgaben.css';
import Modale from './Modale';
import Kalendarmodale from './Kalendarmodal';
import axios from 'axios';

function AusstehendAufgaben() {
   const [data, setData] = useState(null);
   const [idCheck, setIdCheck] = useState(null)

   const { reveals, toggle } = Kalendarmodale();

   const toggleAufgabe = (event) => {
      setIdCheck(event.target.id)
      toggle()
   }

   useEffect(() => {
      axios
         .get('/api/aufgabe')
         .then((result) => setData(result.data))
         .catch((err) => console.log(err));
   }, []);

   return (
      <div className="AusstehendAufgaben">
         <Accordion title="Ausstehend">
            {data &&
               data
                  .filter((aufgabe) => aufgabe.kategorie === 'Ausstehend')
                  .map((ele) => (
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
}

// Accordion
const Accordion = ({ children, title, isExpand = false }) => {
   const [expand, setExpand] = useState(isExpand);
   return (
      <div className="box2">
         <div
            className="Ausstehend-box"
            onClick={() => setExpand((expand) => !expand)}
         >
            <span className="title">{title}</span>

            <div className="clearfix2"></div>
         </div>
         {expand && <div className="content2">{children}</div>}
      </div>
   );
};

export default AusstehendAufgaben;
