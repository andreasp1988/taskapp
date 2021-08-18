import React, { useState } from 'react';
import '../css/Alleaufgaben.css';
import Modal from './Modal';



const Aufgaben = () => {


   const [openModal, setOpenModal] = useState(false)

   const showModal = () => {

      setOpenModal(true)

   }
   const hideModal = () => {
      setOpenModal(false)
   }




   return (
      <div className="App">
         <Accordion title="Alle Aufgaben">
            <form>
               <input type="checkbox" />
               <label>Wäsche aufhängen <button className="btnInfo" onClick={() => showModal()}>i</button></label>
               <input type="checkbox" />
               <label>Einkaufen gehen</label><br />
               <input type="checkbox" />
               <label>Javascript lernen</label><br />
               <input type="checkbox" />
               <label>php mal angucken</label><br />
               <input type="checkbox" />
               <label>Katze füttern</label><br />
               <input type="checkbox" />
               <label>Kleiderschrank aussortieren</label>
            </form>
         </Accordion>
         <Modal showModal={openModal} hideModal={hideModal}>
            <div className="Modal">
               <p>Eine Beschreibung der Aufgabe. Dolor sit amet, consectetur adipiscing elit. Nulla eget nunc, leo quam. Posuere amet, enim nunc, nulla mauris in facilisi id fusce.</p>

               <button className="modalBtn">Löschen</button>
               <button className="modalBtn">Erledigt</button>
               <button className="modalBtn">Bearbeiten</button>
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
