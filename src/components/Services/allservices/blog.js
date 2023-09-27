import React from 'react';
import ReactPaginate from "react-paginate";
import { useState } from "react";
import bulletins from '../../../data/blogdata';
import Footer from '../../footer';
import { MenuDiv } from '../../navbar';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import LongText from '../longtext';

const BulletinList = ({ bulletin }) => {

  return (
    <>
      <div className='row blogrow'>
        <div className='col-lg-3 blogimgcol'>
          <img className='blogimg'  src={bulletin.img} alt='blogimg' />
        </div>
        <div className='col-lg-9 blogcol'>
          <h2>{bulletin.title}</h2>
          <LongText content={bulletin.sampletext} limit={250} />
          <a className='readbtn' href={bulletin.linkto} target="_blank" rel="noreferrer noopener">Read More</a>
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
  };

  return (
    <>
      <MenuDiv />
        <div className='sdiv'>
          <h1>Blogs</h1>
          <p className='bp'>Space exploration has captivated the human race for centuries. From the early days of stargazing to today's sophisticated probes and space telescopes, the mysteries of the universe are being unraveled. On our website, you can explore the latest news and developments in space exploration. From stories about the discovery of distant galaxies to updates on missions to Mars and beyond, stay informed about the exciting advances in space science and technology.</p>
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


