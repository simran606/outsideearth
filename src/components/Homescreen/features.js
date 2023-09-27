import React from 'react';
import '../../styles/features.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from 'react-bootstrap/Card';
import data from '../../data/featuredata';

function Features() {
    return (
        <div className="feature-div">
            <h1>Features</h1>
            <div class="featurerow">
              {data.map((item) => {
                return(
                <Card className='feature-card'>
                <p className='feature-icon-p'><FontAwesomeIcon className='feature-icon' size='2x' icon={item.featureicon}/></p>                  
                  <Card.Body>
                    <Card.Title className='card-title'>{item.title}</Card.Title>
                    <Card.Text>{item.text}
                    </Card.Text>
                  </Card.Body>
                </Card>
                );
              })}
            </div>
            
        </div>
    )
}

export default Features;
