import React, { useState, useEffect } from 'react';
import Modale from './Modale';
import Kalendarmodale from './Kalendarmodal';
import '../css/FertigAufgaben.css';
import axios from 'axios';

function FertigAufgaben() {
   const { reveals, toggle } = Kalendarmodale();

   const [data, setData] = useState(null);
   const [idCheck, setIdCheck] = useState(null)

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
      <div className="FertigAufgaben">
         <Accordion title="Fertig">
            {data &&
               data
                  .filter((aufgabe) => aufgabe.kategorie === 'Fertig')
                  .map((ele) => (
                     <div key={ele._id}>
                        {ele.kategorie === "Fertig" ? (
                           <span>
                              <input type="checkbox" checked /> {ele.name}{' '}
                           </span>
                        ) :
                           <span>
                              <input type="checkbox" /> {ele.name}{' '}
                           </span>
                        }
                        {/* <input type="checkbox" /> {ele.name}{' '} */}
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
      <div className="box3">
         <div
            className="Fertig-box"
            onClick={() => setExpand((expand) => !expand)}
         >
            <span className="title">{title}</span>

            <div className="clearfix3"></div>
         </div>
         {expand && <div className="content3">{children}</div>}
      </div>
   );
};

export default FertigAufgaben;
