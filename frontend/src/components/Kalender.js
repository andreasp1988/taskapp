import React, { useState, Fragment } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Nav from './Nav';
import '../css/Kalendar.css';
import Kalendarmodale from './Kalendarmodal';
import Modale from './Modale';

import { useEffect } from 'react';
import axios from 'axios';
//import {
// Link
//} from "react-router-dom";

//import ToDoList from './ToDoList';
//import data from './data.json';

const Kalender = () => {
   const [date, setDate] = useState(new Date());

   //const [toDoList, setToDoList] = useState(data);
   //modal

   const { reveals, toggle } = Kalendarmodale();

   const onChange = (newDate) => {
      setDate(newDate);
      // setToDoList(data);
   };

   const [data, setData] = useState(null);

   useEffect(() => {
      axios
         .get('/api/aufgabe')
         .then((result) => setData(result.data))
         .catch((err) => console.log(err));
   }, []);

   //const onClick = (data){}

   return (
      <Fragment>
         <div className="kalendar">
            <h1>Kalender</h1>
            <div className="kalendercontainer">
               <Calendar onChange={onChange} />
               <div className="contain">
                  <p>Alle aufgaben für heute.{date.toLocaleDateString()}</p>
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

            {data &&
               data
                  .filter(
                     (aufgabe) =>
                        aufgabe.datum === date.toLocaleDateString('ru-RU'),
                  )
                  .map((ele) => (
                     <div key={ele._id}>
                        <input type="checkbox" /> {ele.name}{' '}
                        <button className="btnInfo" onClick={toggle}>
                           i
                        </button>
                     </div>
                  ))}

            <Modale reveals={reveals} hidden={toggle} />

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
