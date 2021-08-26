import React, { useState, Fragment } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Nav from './Nav';
import '../css/Kalendar.css';
import Kalendarmodale from './Kalendarmodal';
import Modale from './Modale';

import { useEffect } from 'react';
import axios from 'axios';

const Kalender = () => {
   const [date, setDate] = useState(new Date());

   const { reveals, toggle } = Kalendarmodale();

   const onChange = (newDate) => {
      setDate(newDate);
   };

   const [data, setData] = useState(null);

   useEffect(() => {
      axios
         .get('/api/aufgabe')
         .then((result) => setData(result.data))
         .catch((err) => console.log(err));
   }, []);

   return (
      <Fragment>
         <div className="kalendar">
            <h1>Kalender</h1>
            <div className="kalendercontainer">
               <Calendar onChange={onChange} />
               <div className="contain">
                  <p>Alle aufgaben für heute.{date.toLocaleDateString()}</p>

                  {data &&
                     data
                        .filter(
                           (aufgabe) =>
                              aufgabe.datum ===
                              date.toLocaleDateString('ru-RU'),
                        )
                        .map((ele) => (
                           <div key={ele._id}>
                              <input type="checkbox" /> {ele.name}{' '}
                              <button className="btnInfo" onClick={toggle}>
                                 i
                              </button>
                           </div>
                        ))}
               </div>
            </div>

            <Modale reveals={reveals} hidden={toggle} />

            <Nav />
         </div>
      </Fragment>
   );
};

export default Kalender;
