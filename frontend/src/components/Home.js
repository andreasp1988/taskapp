import React from 'react';
import Alleaufgaben from './Alleaufgaben';
import Nav from './Nav';
import '../css/Home.css';
import FertigAufgaben from './FertigAufgaben';
import AusstehendAufgaben from './AusstehendAufgaben';
import InBearbeitungsaufgaben from './InBearbeitungsaufgaben';
const Home = () => {
   return (
      <div className="home">
         <h1>Dashboard</h1>
         <Nav />
         <Alleaufgaben />
         <AusstehendAufgaben />
         <FertigAufgaben />
         <InBearbeitungsaufgaben />
      </div>
   );
};

export default Home;
