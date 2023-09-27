import React from 'react';
import '../styles/pagenotfound.css';

function Pagenotfound() {
    return (
        <div className='pagenotfounddiv'>
            <div className='textdiv'>
                <h1>Error 404</h1>
                <h2>Page Not Found</h2>
                <a className='readbtnlight' href='/'>Return to Homescreen</a>
            </div>
        </div>
    )
}

export default Pagenotfound;
