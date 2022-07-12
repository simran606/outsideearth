import React from 'react';
import '../../App.css';
import Features from './features';
import Footer from '../footer';
import Menubar from '../navbar';
import SectionHomeScreen from './servicehomescreen';
import Slide from './slide';

function HomeScreen() {
  return (
    <div className="App">
      <Menubar />
      <Slide />
      <Features />
      <SectionHomeScreen />
      <Footer />
    </div>
  );
}

export default HomeScreen;
