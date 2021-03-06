import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../css/Modale.css';
// import TimePicker from 'react-time-picker';
// import Calendar from 'react-calendar';

import { useEffect, useState } from 'react';
import axios from 'axios';

const Modale = ({ reveals, hidden, currentId }) => {
   const [aufgabe, setAufgabe] = useState(null);
   // const [inputs, setInputs] = useState({ name: "", datum: "", start: "", ende: "", beschreibung: "", kategorie: "" });

   useEffect(() => {
      if (reveals) {
         if (!aufgabe) {
            axios
               .get(`/api/aufgabe/${currentId}`)
               .then((result) => setAufgabe(result.data))
               .catch((err) => console.log(err));
         }
      }
   });

   const deleteAufgabe = () => {
      axios
         .delete(`/api/aufgabe/${currentId}`)
         .then((result) => (window.location.href = result.data.redirect))
         .catch((err) => console.log(err));
   };

   const handleErledigt = () => {
      let inputs = { name: aufgabe.name, datum: aufgabe.datum, start: aufgabe.start, ende: aufgabe.ende, beschreibung: aufgabe.beschreibung, kategorie: "Fertig" }
      updateAufgabe(inputs)
   }

   const updateAufgabe = (inputs) => {

      axios.put(`/api/aufgabe/${currentId}`, inputs)
         .then(result => window.location.href = result.data.redirect)
         .catch(err => console.log(err))
   }

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
                     {aufgabe.kategorie === "Fertig" ? (
                        <p><img src="/img/kreis-f.svg" alt="" /> &nbsp;{aufgabe.kategorie}</p>
                     ) : null}
                     {aufgabe.kategorie === "In Bearbeitung" ? (
                        <p><img src="/img/kreis-b.svg" alt="" /> &nbsp;{aufgabe.kategorie}</p>
                     ) : null}
                     {aufgabe.kategorie === "Ausstehend" ? (
                        <p><img src="/img/kreis-a.svg" alt="" /> &nbsp;{aufgabe.kategorie}</p>
                     ) : null}
                     {/* <p><img src="/img/kreis.svg" alt="" />{aufgabe.kategorie}</p> */}
                  </div>
               )}

               {/* <span className="circle"></span>
               <span className="fertig">Ausstehend</span> */}

               <button className="modalBtn1" onClick={deleteAufgabe}>
                  L??schen
               </button>
               <br />
               <Link to="/home" >
                  <button className="modalBtn2" onClick={handleErledigt}>Erledigt</button>
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
