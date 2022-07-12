import React from 'react';
import Index from '.';
import '../../../../styles/shopsection.css';
import kidsdata from '../../../../data/alldata/kidsdata.json';
import tshirtdata from '../../../../data/tshirtdata';
import bedsheetdata from '../../../../data/alldata/bedheetdata.json';

function Kids() {
    return (
        <Index link="Kids"  bulletins={kidsdata} />
    );
}

function TShirts() {
    return (
        <Index link="T Shirts" bulletins={tshirtdata} />
    );
}

function Women() {
    return (
        <Index link="Women" bulletins={kidsdata} />
    );
}

function PoloShirts() {
    return (
        <Index link="Polo Shirts" bulletins={kidsdata} />
    );
}

function JacketsSweatshirts() {
    return (
        <Index link="Jackets & Sweatshirts" bulletins={kidsdata} />
    );
}

function SpaceSocks() {
    return (
        <Index link="Space Socks" bulletins={kidsdata} />
    );
}

function Hats() {
    return (
        <Index link="Hats" bulletins={kidsdata} />
    );
}

function Masks() {
    return (
        <Index link="Masks"  bulletins={kidsdata} />
    );
}

// function TShirts() {
//     return (
//         <Index link="T Shirts" sampletext="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." data={kidsdata} />
//     );
// }

// function TShirts() {
//     return (
//         <Index link="T Shirts" sampletext="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." data={kidsdata} />
//     );
// }

// function TShirts() {
//     return (
//         <Index link="T Shirts" sampletext="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur." data={kidsdata} />
//     );
// }

function Bedsheets() {
    return (
        <Index link="Bedsheets" bulletins={bedsheetdata}  />
    );
}




export default Kids;
export { TShirts , Women , PoloShirts , JacketsSweatshirts , SpaceSocks , Hats , Masks , Bedsheets};