import React from 'react';
import Footer from '../footer';
import Landingpage from './landingpage';
import '../../styles/contact.css';
import Menubar from '../navbar';

function Contact() {
    return (
        <div className='maincontactdiv'>
            <Menubar />
            <Landingpage />
            <Footer />
        </div>
    )
}

export default Contact;
