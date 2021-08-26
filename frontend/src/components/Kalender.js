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
   const [idCheck, setIdCheck] = useState(null);

   const toggleAufgabe = (event) => {
      setIdCheck(event.target.id);
      toggle();
   };

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
                  <p>Alle aufgaben für den {date.toLocaleDateString()}</p>
                  {/* {date.toLocaleDateString('de-DE')}
                  {data && (data.filter((aufgabe) => aufgabe.datum === date.toLocaleDateString()
                  ).map(ele => <div key={ele._id}>
                     {ele.name}
                  </div>
                  )
                  )} */}
                  {data &&
                     data
                        .filter(
                           (aufgabe) =>
                              aufgabe.datum === date.toLocaleDateString('de-DE'),
                        )
                        .map((ele) => (
                           <div key={ele._id}>
                              <input type="checkbox" /> {ele.name}{' '}
                              <button
                                 className="btnInfo"
                                 onClick={toggleAufgabe}
                                 id={ele._id}
                              >
                                 i
                              </button>
                           </div>
                        ))}
               </div>
            </div>
            {/* {data && (data.map(aufgabe => <div key={aufgabe._id}>
               <Link to={`/aufgaben/${aufgabe._id}`}>
                  {aufgabe.name}
               </Link>
            </div>))} */}
            {/* {data && (data.filter((aufgabe) => aufgabe.datum === date.toLocaleDateString()
            ).map(ele =>
               JSON.stringify(ele.name))
            )} */}
            {/* 
            {data &&
               data
                  .filter(
                     (aufgabe) =>
                        aufgabe.datum === date.toLocaleDateString('ru-RU'),
                  )
                  .map((ele) => (
                     <div key={ele._id}>
                        <input type="checkbox" /> {ele.name}{' '}
                        <button
                           className="btnInfo"
                           onClick={toggleAufgabe}
                           id={ele._id}
                        >
                           i
                        </button>
                     </div>
                  ))} */}

            <Modale reveals={reveals} hidden={toggle} currentId={idCheck} />

            <Nav />
         </div>
      </Fragment>
   );
};

export default Kalender;

//<Modale reveals={reveals} hidden={toggle} />

// {data &&
//    data.map((aufgabe) => (
//       <div key={aufgabe._id}>
//          <input type="checkbox" /*value={aufgabe.name}*/ />
//          <label>{aufgabe.name}</label>
//       </div>
//    ))}
// </div>

