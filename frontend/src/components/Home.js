import React from 'react';
import Alleaufgaben from './Alleaufgaben';
import Nav from './Nav';
import Buttons from './Buttons';
import '../css/Home.css'

const Home = () => {
   return (
      <div className="home">
         <h1>Dashboard</h1>
         <Nav />
         <Alleaufgaben />
         <Buttons />
      </div>
   );
};

export default Home;