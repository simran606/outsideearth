import React from 'react';
import Footer from '../footer';
import Landingpage from './landingpage';
import '../../styles/aboutus.css';
import Menubar from '../navbar';

function Aboutus() {
  return (
    <div className='mainaboutusdiv'>
        <Menubar />
        <Landingpage />
        <Footer />
    </div>
    );
}

export default Aboutus;
