import React from 'react';
import ReactPaginate from "react-paginate";
import { useState } from "react";
import bulletins from '../../../data/shopdata';
import Footer from '../../footer';
import { MenuDiv } from '../../navbar';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const BulletinList = ({ bulletin }) => {
  return (
    <>
      <div className='shopdiv'>
        <Link to={bulletin.linkto}>
            <img className='shopimg'  src={bulletin.img} alt='shopimg' />
            <h3>{bulletin.section}</h3>
        </Link>
      </div>     
    </>
  );
};

const App = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const [pageNumber, setPageNumber] = useState(0);

  const bulletinsPerPage = 12;
  const pagesVisited = pageNumber * bulletinsPerPage;

  const displayBulletins = bulletins
    .filter((bulletin) => {
      if (searchTerm === "") {
        return bulletin;
      } else if (
        bulletin.section.toLowerCase().includes(searchTerm.toLowerCase())
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
        bulletin.section.toLowerCase().includes(searchTerm.toLowerCase())
      ) {
        return bulletin;
      }
      return false;
    }).length / bulletinsPerPage
  );

  const handlePageChange = ({ selected }) => {
    setPageNumber(selected);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <MenuDiv />
        <div className='sdiv'>
          <h1>Shop</h1>
          <p className='bp'>Our shop section features a wide selection of space-themed apparel and merchandise. From t-shirts to mugs to hats and more, you’ll find something to show your love of space. All of our items are made with high-quality materials and are designed to last. Our selection changes often, so be sure to check back frequently to see what’s new. Show your love for space and look great doing it!</p>
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
};

export default App;






















































