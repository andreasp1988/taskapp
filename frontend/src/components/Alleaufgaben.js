import React, { useState } from 'react';
import '../css/Alleaufgaben.css';
import Modal from './Modal';
import { Pie } from 'react-chartjs-2';
import { Link } from "react-router-dom";

//defaults.global.tooltips.enabled = false;
//defaults.global.labels.display = 'false';
const data = {
   //labels: [ "Alleaufgaben",'Ausstehend', 'Fertig', 'In Bearbeitung'],
   datasets: [
      {
         label: '# of votes',
         data: ["5", "5", "5", "25"],
         backgroundColor: [
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)',
            'rgba(255,255,255,1)'

         ],
         borderWidth: 1
      },

   ],


}


const Aufgaben = () => {


   const [openModal, setOpenModal] = useState(false)

   const showModal = () => {

      setOpenModal(true)

   }
   const hideModal = () => {
      setOpenModal(false)
   }

   return (


      <div className="Alleaufgaben">
         <div className="PieChart">
            <div style={{ height: "150px", width: "150px" }}>
               <Pie data={data} options={{
                  responsive: true,
                  title: { text: "# of votes" }
               }} />
            </div>
         </div>

         <Accordion title="Alle Aufgaben">
            <input type="checkbox" />
            <label>Wäsche aufhängen <button className="btnInfo" onClick={() => showModal()}>i</button></label><br />
            <input type="checkbox" />
            <label>Einkaufen gehen <button className="btnInfo" onClick={() => showModal()}>i</button></label><br />
            <input type="checkbox" />
            <label>Javascript lernen <button className="btnInfo" onClick={() => showModal()}>i</button></label><br />
            <input type="checkbox" />
            <label>Finn und Georg ärgern <button className="btnInfo" onClick={() => showModal()}>i</button></label><br />
            <input type="checkbox" />
            <label>Katze füttern <button className="btnInfo" onClick={() => showModal()}>i</button></label><br />
            <input type="checkbox" />
            <label>Kleiderschrank aussortieren <button className="btnInfo" onClick={() => showModal()}>i</button></label>

         </Accordion>
         <Modal showModal={openModal} hideModal={hideModal}>
            <div className="Modal">
               <p>Eine Beschreibung der Aufgabe. Dolor sit amet, consectetur adipiscing elit. Nulla eget nunc, leo quam. Posuere amet, enim nunc, nulla mauris in facilisi id fusce.</p>

               <button className="modalBtn1" onClick={hideModal}>Löschen</button><br />
               <Link to="/home"><button className="modalBtn">Erledigt</button><br /></Link>
               <Link to="/UpdateAufgabe"><button className="modalBtn3">Bearbeiten</button></Link>
            </div>
         </Modal>
      </div>
   );
};
const Accordion = ({ children, title, isExpand = false }) => {
   const [expand, setExpand] = useState(isExpand);
   return (
      <div className="box">
         <div
            className="title-box"
            onClick={() => setExpand((expand) => !expand)}
         >
            <span className="title">{title}</span>

            <div className="clearfix"></div>
         </div>
         {expand && <div className="content">{children}</div>}
      </div>
   );
};




export default Aufgaben;