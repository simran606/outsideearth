import React from 'react';
import '../../styles/service.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from 'react-bootstrap/Card';
import data from '../../data/servicesdata';

function SectionHomeScreen() {
    return (
      <div class="service-div">
        <h1 className='servicehomeh1'>Services</h1>
        <div class="servicesubhomediv">
            {data.slice(0, 3).map((item) => {
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
        <div className='mmdiv'>
          <Link to='/services'>
            <Button className='mmbtn' >View All Services</Button>
          </Link>
         </div>
      </div>
    )
}

export default SectionHomeScreen;
