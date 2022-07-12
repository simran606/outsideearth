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
          <p className='sbp'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
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