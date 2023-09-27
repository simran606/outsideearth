import React from 'react';
import ReactPaginate from "react-paginate";
import { useState } from "react";
import bulletins from '../../../data/booksdata';
import Footer from '../../footer';
import { MenuDiv } from '../../navbar';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import LongText from '../longtext';

const BulletinList = ({ bulletin }) => {
  return (
    <>
      <div className='row bookrow'>
          <div className='col-lg-3 col-sm-3 bookimgcol'>
              <img className='bookimg'  src={bulletin.img} alt='blogimg' />
          </div>
          <div className='col-lg-9 col-sm-9 bookcol'>
              <h2>{bulletin.title}</h2>
              <h5>By {bulletin.author}</h5>
              <LongText content={bulletin.description}  limit = {300} /> 
              <a className='readbtn' href={bulletin.linkto} target="_blank" rel="noreferrer noopener">Buy Now</a>
          </div>
      </div>      
    </>
  );
};


const App = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const [pageNumber, setPageNumber] = useState(0);

  const bulletinsPerPage = 10;
  const pagesVisited = pageNumber * bulletinsPerPage;

  const displayBulletins = bulletins
    .filter((bulletin) => {
      if (searchTerm === "") {
        return bulletin;
      } else if (
        bulletin.title.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return bulletin;
      }
      return false;
    })
    .slice(pagesVisited, pagesVisited + bulletinsPerPage)
    .map((bulletin) => {
      return (
        <>
          <BulletinList key={bulletin.bbID} bulletin={bulletin} />
        </>
      );
    });

  const pageCount = Math.ceil(
    bulletins.filter((bulletin) => {
      if (searchTerm === "") {
        return bulletin;
      } else if (
        bulletin.title.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return bulletin;
      }
      return false;
    }).length / bulletinsPerPage
  );

  const handlePageChange = ({ selected }) => {
    setPageNumber(selected);
    window.scrollTo(0, 0);
  }

  // const handleSubmit = () => {
  //   let databody = {
  //       "title": this.state.title,
  //       // "quote": this.state.quoteIn
  //   }
  
  //   return fetch('http://localhost:27017', {
  //       method: 'POST',
  //       body: JSON.stringify(databody),
  //       headers: {
  //           'Content-Type': 'application/json'
  //       },
  //   })
  //   .then(res => res.json())
  //   .then(data => console.log(data)); 
  // }

  return (
    <>
      <MenuDiv />
        <div className='sdiv'>
          <h1>Books</h1>
          <p className='bp'>Explore the universe from the comfort of your own home with our selection of books about space. From introductory guides for budding astronomers to comprehensive collections of photographs from the Hubble telescope, we have something for everyone. Whether you are interested in learning about the history of space exploration, discovering the latest news from NASA, or simply admiring the beauty of the night sky, these books are sure to keep you captivated. So, let your imagination soar and explore the mysteries of the cosmos today!</p>
          <Form className="searchcol">
                <Form.Control type="search" placeholder="Search" className="me-2" onChange={(e) => {
              setSearchTerm(e.target.value);
              handlePageChange({ selected: 0 });
            }}
           aria-label="Search" ></Form.Control><FontAwesomeIcon className='search-icon' size='1x' icon={faSearch}/>
          </Form>
          {displayBulletins}
          <ReactPaginate previousLabel={"<"} nextLabel={">"} pageCount={pageCount} onPageChange={handlePageChange} breakClassName={"page-item"} breakLinkClassName={"page-link"} containerClassName={"pagination"} pageClassName={"page-item"} pageLinkClassName={"page-link"} previousClassName={"page-item"} previousLinkClassName={"page-link"} nextClassName={"page-item"} nextLinkClassName={"page-link"} activeClassName={"active"} />
        </div>
      <Footer />
    </> 
  );
}

export default App;
