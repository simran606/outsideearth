import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import '../styles/footer.css';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import data from '../data/footerdata';

function Footer() {
    return (
        <div class="footer-div">
            <div class="row footer-row">
                <div class="col-lg-4 footer-col">
                    <Link to='/'>
                        <img className='logo' src="../../logo.png" alt="logo" />
                    </Link>
                </div>
                <div class="col-lg-4 col-sm-6 footer-col">
                    {data.slice(0,5).map((item => {
                        return(
                            <Link to={item.linkto}>
                               {item.link}
                            </Link>
                        );
                    }))}
                </div>
                <div class="col-lg-4 col-sm-6 footer-col">
                    {data.slice(6,14).map((item => {
                        return(
                            <Link to={item.linkto}>
                               {item.link}
                            </Link>
                        );
                    }))}
                </div>
            </div>
            <div className='footer-subdiv'>
                <p className='left-text'>Made with  <FontAwesomeIcon icon={faHeart} /> in India</p>
                <p className='right-text'>© All rights reserved </p>
            </div>
        </div>
    )
}

export default Footer;
