import React, { useState, Fragment, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import Nav from './Nav';
import '../css/Kalendar.css';
import Kalendarmodale from './Kalendarmodal';
import Modale from './Modale';
//import { Link } from 'react-router-dom';
import axios from 'axios';
//import TimePicker from 'react-time-picker';
//import ToDoList from './ToDoList';
//<TimePicker onChange={onChange} value={date}

const Kalender = () => {
   const [date, setDate] = useState(new Date());
   const [data, setData] = useState(null);

   //let { id } = useParams();
   //const [task,setTask] = useState(null)
   //const [inputs, setInputs] = useState({});

   // const handleInputs = (event) => {
   //    setInputs((prev) => {
   //       return {
   //          ...prev,
   //          [event.target.name]: event.target.value,
   //       };
   //    });
   // };

   useEffect(() => {
      axios
         .get('/api/aufgabe')
         .then((result) => {
            // console.log(result);
            setData(result.data);
         })
         .catch((err) => console.log(err));
   });

   //modal
   const { reveals, toggle } = Kalendarmodale();
   const onChange = (newDate) => {
      setDate(newDate);
   };

   //const allowed = ['kategorie'];
   // const filterd = Object.datum(data);

   return (
      <Fragment>
         <div className="kalendar">
            <h1>Kalender</h1>
            <div className="kalendercontainer">
               <Calendar onChange={onChange} />
               <div className="contain">
                  <p>Alle aufgaben für heute.{date.toLocaleDateString()}</p>
                  <br />
               </div>
            </div>

            <Modale reveals={reveals} hidden={toggle} />

            <Nav />
         </div>
      </Fragment>
   );
};
/* <button className="btnInfo" onClick={toggle}>
i
</button> */

//<Modale reveals={reveals} hidden={toggle} />

// {data &&
//    data.map((aufgabe) => (
//       <div key={aufgabe._id}>
//          <input type="checkbox" /*value={aufgabe.name}*/ />
//          <label>{aufgabe.name}</label>
//       </div>
//    ))}
// </div>
export default Kalender;
