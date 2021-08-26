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
               {/* <p>Alle aufgaben für heute.{date.toLocaleDateString()} | </p><br/> */}
               {aufgabe && (
                  <div>
                     <h3>{aufgabe.name}</h3>
                     <p>{aufgabe.datum}</p>
                     <p>{aufgabe.start}</p>
                     <p>{aufgabe.beschreibung}</p>
                     <p>{aufgabe.kategorie}</p>
                  </div>
               )}
               {/* <p>
                     {currentId}
                     Eine Beschreibung der Aufgabe. Dolor sit amet, consectetur
                     adipiscing elit. Nulla eget nunc, leo quam. Posuere amet, enim
                     nunc, nulla mauris in facilisi id fusce.
                  </p>
                  <br /> */}
               {/* <div className="hero">
                     <div className="circle"></div>
                     <div className="fertig">Fertig</div>
                  </div> */}
               {/* 
                  <button className="modalBtn1" onClick={hidden}> */}
               <button className="modalBtn1" onClick={deleteAufgabe}>
                  Löschen
               </button>
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
