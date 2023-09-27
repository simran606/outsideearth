import React from 'react';
import Footer from '../../footer';
import { MenuDiv } from '../../navbar';
import data from '../../../data/videosdata';
// import ReactPlayer from 'react-player';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

function Videos() {
  return (
      <div>
        <MenuDiv />
        <div className='sdiv'>
          <h1>Videos</h1>
          <p className='sbp'>Explore the wonders of space with our amazing collection of videos and documentaries! Our selection of videos covers a range of topics, from space exploration to the latest discoveries in astronomy. Whether you're an experienced astronomer or just starting out, these captivating videos are sure to provide you with an educational and entertaining experience. Watch as astronauts venture into the unknown, explore the mysteries of our universe, and uncover groundbreaking discoveries. So, come and explore the stars with us!</p>
          {data.map((item) => {
                return(
                    <div className='videodiv'>
                        {/* <div className='shopcol'> */}
                        <Link to={item.linkto}>
                          <h3>{item.title}</h3>
                          <img className='videoimg'  src={item.img} alt='videoimg' />
                          <FontAwesomeIcon className='playicon' icon={faPlayCircle} size='4x' />
                          {/* <ReactPlayer url={item.linkto} /> */}
                        </Link>
                        {/* </div> */}
                        {/* <div className='col-lg-4 shopcol'></div>
                        <div className='col-lg-4 shopcol'></div> */}
                        {/* <div className='col-lg-9 shopcol'>
                            <h2>{item.title}</h2>
                            <h5>By {item.author}</h5>
                            <p>{item.description}</p>
                            <a className='readbtn' href={item.linkto} target="_blank" rel="noreferrer noopener">Buy Now</a>
                        </div> */}
                    </div>
                )
            })}
        </div>
        <Footer />
      </div>
    );
}

export default Videos;