import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import '../css/Modale.css';

const Modale = ({ reveals, hidden }) =>
   reveals ? (
      <Fragment>
         <div className="overlay" />
         <div className="wrapper">
            <div className="modal">
               <p>
                  Eine Beschreibung der Aufgabe. Dolor sit amet, consectetur
                  adipiscing elit. Nulla eget nunc, leo quam. Posuere amet, enim
                  nunc, nulla mauris in facilisi id fusce.
               </p>
               <br />
               <div className="hero">
                  <div className="circle"></div>
                  <div className="fertig">Fertig</div>
               </div>

               <button className="modalBtn1" onClick={hidden}>
                  Löschen
               </button>
               <br />
               <Link to="/home">
                  <button className="modalBtn2">Erledigt</button>
                  <br />
               </Link>
               <Link to="/UpdateAufgabe">
                  <button className="modalBtn3">Bearbeiten</button>
               </Link>
            </div>
         </div>
      </Fragment>
   ) : null;

export default Modale;
