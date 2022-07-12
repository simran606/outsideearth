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
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit. Eget nunc lobortis mattis aliquam. Aliquet eget sit amet tellus cras. Lectus vestibulum mattis ullamcorper velit.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit. Eget nunc lobortis mattis aliquam. Aliquet eget sit amet tellus cras. Lectus vestibulum mattis ullamcorper velit. </p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit. Eget nunc lobortis mattis aliquam. Aliquet eget sit amet tellus cras. Lectus vestibulum mattis ullamcorper velit.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed vulputate odio ut enim blandit volutpat maecenas volutpat blandit. Eget nunc lobortis mattis aliquam. Aliquet eget sit amet tellus cras. Lectus vestibulum mattis ullamcorper velit. </p>
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