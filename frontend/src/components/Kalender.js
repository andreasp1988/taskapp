import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Nav from './Nav';
import '../css/Kalendar.css';
//import ToDoList from './ToDoList';
//import data from './data.json';

const Kalender = () => {
   const [date, setDate] = useState(new Date());

   //const [toDoList, setToDoList] = useState(data);

   const onChange = (newDate) => {
      setDate(newDate);
      // setToDoList(data);
   };

   //const onClick = (data){}

   return (
      <div className="kalendar">
         <h1>Kalender</h1>
         <div className="kalendercontainer">
            <Calendar onChange={onChange} />
            <div className="contain">
               <p>Alle aufgaben für heute.{date.toLocaleDateString()}</p>
            </div>
         </div>

         <Nav />
      </div>
   );
};

export default Kalender;
