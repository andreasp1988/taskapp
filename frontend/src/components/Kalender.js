import React, { useState, Fragment } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Nav from './Nav';
import '../css/Kalendar.css';
import Kalendarmodale from './Kalendarmodal';
import Modale from './Modale';

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

            <div>
               <input type="checkbox" />
               <label>
                  Wäsche aufhängen{' '}
                  <button className="btnInfo" onClick={toggle}>
                     i
                  </button>
               </label>
               <br />
               <input type="checkbox" />
               <label>
                  Einkaufen gehen{' '}
                  <button className="btnInfo" onClick={toggle}>
                     i
                  </button>
               </label>
               <br />
               <input type="checkbox" />
               <label>
                  Javascript lernen{' '}
                  <button className="btnInfo" onClick={toggle}>
                     i
                  </button>
               </label>
               <br />
               <input type="checkbox" />
               <label>
                  Finn und Georg ärgern{' '}
                  <button className="btnInfo" onClick={toggle}>
                     i
                  </button>
               </label>
               <br />
               <input type="checkbox" />
               <label>
                  Katze füttern{' '}
                  <button className="btnInfo" onClick={toggle}>
                     i
                  </button>
               </label>
               <br />
               <input type="checkbox" />
               <label>
                  Kleiderschrank aussortieren{' '}
                  <button className="btnInfo" onClick={toggle}>
                     i
                  </button>
               </label>
            </div>
            <Modale reveals={reveals} hidden={toggle} />

            <Nav />
         </div>
      </Fragment>
   );
};

export default Kalender;
