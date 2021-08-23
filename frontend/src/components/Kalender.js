import React, { useState } from 'react';
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css'
import Nav from './Nav';
import '../css/Kalendar.css'



const Kalender = () => {
    const [date, setDate] = useState(new Date());

    // const [work,setWork] = useState([
    //   {
    //     title:'Wäsche aufhängen', p:'Eine Beschreibung der Aufgabe. Dolor sit amet, consectetur adipiscing elit. Nulla eget nunc, leo quam. Posuere amet, enim nunc, nulla mauris in facilisi id fusce.',
    //      id:1
    //  },
    //   {
    //     title:'Wäsche aufhängen', p:'Eine Beschreibung der Aufgabe. Dolor sit amet, consectetur adipiscing elit. Nulla eget nunc, leo quam. Posuere amet, enim nunc, nulla mauris in facilisi id fusce.',
    //     id:2,
    // },
    //   {
    //     title:'Wäsche aufhängen', p:'Eine Beschreibung der Aufgabe. Dolor sit amet, consectetur adipiscing elit. Nulla eget nunc, leo quam. Posuere amet, enim nunc, nulla mauris in facilisi id fusce.',
    //      id:3
    //   }
    // ])
  
    const onChange = (newDate) => {
      setDate(newDate);
    }
  
    return (
              <div className="kalendar">
                  <Calendar onChange={onChange}/>
                    <div>
                      <p>Alle aufgaben für heute.{date.toLocaleDateString()}</p>
                      
                        <input type="checkbox" />
                        <label>Wäsche aufhängen</label><br />
                        <input type="checkbox" />
                        <label>Einkaufen gehen</label><br />
                        <input type="checkbox" />
                        <label>Javascript lernen</label>

                  



                    </div>
               
                <Nav />
                  </div>
              
          )
  }  

  export default Kalender;
