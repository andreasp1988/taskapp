import React, { Fragment, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../css/Modale.css';
//import Kalender from './Kalender'
import axios from 'axios';
// import DatePicker from 'react-datepicker';
// import TimePicker from 'rc-time-picker';
import 'rc-time-picker/assets/index.css';
import 'react-datepicker/dist/react-datepicker.css';

const Modale = ({ reveals, hidden }) => {
   const [data, setData] = useState(null);

   useEffect(() => {
      axios
         .get('/api/aufgabe')
         .then((result) => setData(result.data))
         .catch((err) => console.log(err));
   }, []);

   return reveals ? (
      <Fragment>
         <div className="overlay" />
         <div className="wrapper">
            <div className="modal">
               {data &&
                  data
                     .filter((aufgabe) => aufgabe.kategorie === 'Fertig')
                     .map((ele) => (
                        <div key={ele._id}>
                           <h4>{ele.name}</h4>
                           {/* <p>
                              <DatePicker className="bg" /> &nbsp; | &nbsp;{' '}
                              <TimePicker className="bgZeit" />
                           </p> */}
                           <p>{ele.beschreibung}</p>
                        </div>
                     ))}

               <div className="hero">
                  <div className="circle"></div>
                  <div className="fertig">Fertig</div>
               </div>

               <button className="modalBtn1" onClick={hidden}>
                  Löschen
               </button>
               <br />
               <Link to="/home">
                  <button className="modalBtn2" onClick={hidden}>
                     Erledigt
                  </button>
                  <br />
               </Link>
               <Link to="/UpdateAufgabe">
                  <button className="modalBtn3">Bearbeiten</button>
               </Link>
            </div>
         </div>
      </Fragment>
   ) : (
      <></>
   );
};
//<p>{date.toLocaleDateString()} | {ele.start}</p>
export default Modale;
