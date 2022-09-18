import React from 'react';

import Header from './containers/header/Header';
import CTA from './components/CTA';
import NFTColletion from './containers/NFTColletion/NFTCollection';
import Navbar from './components/navbar/Navbar'


import './App.css';

export default function Home() {
  return (

    <div className="App">
      <div className="gradient__bg">
      <Navbar/>
      <Header/>
      
      </div>
      <CTA/>
      <NFTColletion/>
    </div>
  );
}
