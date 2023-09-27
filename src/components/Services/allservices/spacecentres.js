import React, { useState } from 'react';
import Footer from '../../footer';
import { MenuDiv } from '../../navbar';
import '../../../styles/alls.css';
import bulletins from '../../../data/spacecentresdata';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import LongText from '../longtext';
import ReactPaginate from "react-paginate";

const BulletinList = ({ bulletin }) => {
  return (
    <>
      <div className='row spacecentrediv'>
        <div className='col-lg-3 spacecentreimgcol'>
            <img className='spacecentreimg'  src={bulletin.img} alt='spacecentreimg' />
        </div>
        <div className='col-lg-9 spacecentrecol'>
            <h2>{bulletin.title}</h2>
            <LongText content={bulletin.sampletext}  limit = {300} /> 
            <a className='readbtn' href={bulletin.linkto} target="_blank" rel="noreferrer noopener">Visit Official Website</a>
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
          <h1>Space Centres</h1>
          <p className='bp'>Space exploration has been a fascinating topic for centuries, and continues to capture the imaginations of people around the world. From the earliest days of space exploration to modern-day missions, space centres have been an integral part of the journey. Today, space centres around the world offer a variety of activities, exhibits, and educational programs to explore space. From interactive displays to guided tours, space centres provide a unique opportunity to explore the wonders of space. Visitors can learn about the history of space exploration, observe current missions, and get hands-on experience with space technology. Experienced staff members are available to answer questions and provide insight into space exploration. By visiting a space centre, visitors can gain a deeper understanding of the universe beyond our own planet.</p>
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