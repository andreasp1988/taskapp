import React from 'react';
import Alleaufgaben from './Alleaufgaben'
import Nav from './Nav'
import Buttons from './Buttons';

const Home = () => {
   return (
      <div className="home">
         <Nav />
         <Alleaufgaben />
         <Buttons />
      </div>
   );
};

export default Home;
