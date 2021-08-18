import React from 'react';
import Alleaufgaben from './Alleaufgaben'
import PieChart from './PieChart';
import Nav from './Nav'
import Buttons from './Buttons';

const Home = () => {
   return (
      <div className="home">
         <Nav />
         <PieChart />
         <Alleaufgaben />
         <Buttons />
      </div>
   );
};

export default Home;
