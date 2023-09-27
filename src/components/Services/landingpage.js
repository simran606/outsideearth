import React from 'react';
import '../../styles/service.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from 'react-bootstrap/Card';
import data from '../../data/servicesdata';
import { Link } from 'react-router-dom';

function LandingPage() {
    return (
        <div class="service-div">
            <img className='serviceimg' src='../../../Images/s.jpg' alt='serviceimg'/>
            <h1 className='serviceh1'>Services</h1>
            <div className='servicep'>
              <p>Space exploration has always been a source of fascination for many people. For those who are passionate about space, there are now a number of services available to help them explore the stars. From educational programs to interactive websites, there are plenty of ways to get involved and experience space for yourself.</p>
              <p>One way to explore space is through virtual reality. There are several companies that offer virtual reality tours of the universe. These tours can bring users to the International Space Station, the Moon, and even other galaxies. They can control the direction and speed of their journey and experience the wonders of space firsthand.</p>
              <p>Another popular service for space lovers is educational programs. There are many organizations that offer classes and workshops to teach people about the universe. They often feature lectures and presentations from experts in the field, providing a comprehensive look at space exploration. These programs are perfect for those looking to learn more about the cosmos.</p>
              <p>There are also a variety of interactive websites designed specifically for space lovers. These sites include detailed information about the planets and stars, photos and videos of various celestial bodies, and online forums for enthusiasts to discuss their passion. These websites are a great way to explore the universe from the comfort of your own home.</p>
              <p>Finally, there are space exploration apps available for smartphone and tablet users. These apps contain a variety of features, including interactive maps of the solar system and space-related games. They can be a great way to stay up to date on the latest news and developments in space exploration.</p>
              <p>For those passionate about space exploration, there are now a number of services available to help them explore the stars. From virtual reality tours to educational programs and interactive websites, there are plenty of ways to get involved and experience space for yourself.</p>
            </div>
            <div class="servicesubdiv">
              {data.map((item) => {
                return(
                   <Link to={item.linkto}>
                      <Card className='service-card'>
                        <p className='service-icon-p'><FontAwesomeIcon className='service-icon' size='2x' icon={item.serviceicon}/></p>                  
                        <Card.Body>
                          <Card.Title className='servicecard-title'>{item.title}</Card.Title>
                          <Card.Text>{item.text}</Card.Text>
                        </Card.Body>
                      </Card>
                   </Link>
                );
              })}
            </div>
        </div>
    )
}

export default LandingPage;