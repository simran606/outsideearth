import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../../styles/slide.css';
import data from '../../data/slidedata';

function Slide() {
    return (
        <div className='slide-div'>
            <Carousel fade>
              {data.map((item => {
                return(
                  <Carousel.Item>
                      <img className="sl-img" src={item.img} alt="Third slide" />          
                      {/* <Carousel.Caption>
                           <h3>{item.title}</h3>
                           <p>{item.text}</p>
                      </Carousel.Caption> */}
                  </Carousel.Item>
                );
              }))}
            </Carousel>
        </div>
    )
}

export default Slide;
