import React from 'react';
import Alleaufgaben from '../components/Alleaufgaben';
import PieChart from '../components/ PieChart';
import Nav from '../components/Nav';
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
