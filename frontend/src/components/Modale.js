import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../css/Modale.css';
// import TimePicker from 'react-time-picker';
// import Calendar from 'react-calendar';

import { useEffect, useState } from 'react';
import axios from 'axios';

const Modale = ({ reveals, hidden, currentId }) => {
   const [aufgabe, setAufgabe] = useState(null);

   useEffect(() => {
      axios
         .get(`/api/aufgabe/${currentId}`)
         .then((result) => setAufgabe(result.data))
         .catch((err) => console.log(err));
   });

   const deleteAufgabe = () => {
      axios
         .delete(`/api/aufgabe/${currentId}`)
         .then((result) => (window.location.href = result.data.redirect))
         .catch((err) => console.log(err));
   };

   return reveals ? (
      <Fragment>
         <div className="overlay" />
         <div className="wrapper">
            <div className="modal">
               {aufgabe && (
                  <div className="task">
                     <h4>{aufgabe.name}</h4>
                     <p>
                        <img src="/calendrmodal.png" alt="" /> &nbsp;{' '}
                        {aufgabe.datum} &nbsp; | &nbsp; {aufgabe.start} Uhr
                     </p>

                     <p>{aufgabe.beschreibung}</p>

                     <p> {aufgabe.kategorie}</p>
                  </div>
               )}

               {/* <span className="circle"></span>
               <span className="fertig">Ausstehend</span> */}

               <button className="modalBtn1" onClick={deleteAufgabe}>
                  Löschen
               </button>
               <br />
               <Link to="/home">
                  <button className="modalBtn2" onClick={hidden}>Erledigt</button>
               </Link>
               {/* <button className="modalBtn2">Erledigt</button> */}
               <br />
               <Link to={`/aufgaben/${currentId}`}>
                  <button className="modalBtn3">Bearbeiten</button>
               </Link>
            </div>
         </div>
      </Fragment>
   ) : null;
};

export default Modale;
