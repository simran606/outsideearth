import React , { useState } from 'react';
import Footer from '../../footer';
import { MenuDiv } from '../../navbar';
import '../../../styles/alls.css';
import bulletins from '../../../data/gamesdata';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import ReactPaginate from "react-paginate";


const BulletinList = ({ bulletin }) => {
  return (
    <>
      <div className='gamesdiv'>
          <FontAwesomeIcon className='games-icon' size='2x' icon={bulletin.img}/>
          {/* <div className='gamessubdiv'> */}
            <h2>{bulletin.title}</h2>
            <a className='readbtn' href={bulletin.linkto} target="_blank" rel="noreferrer noopener">Play Now</a>
          {/* </div> */}
      </div>      
    </>
  );
};

const App = () => {

  const [searchTerm, setSearchTerm] = useState("");
  const [pageNumber, setPageNumber] = useState(0);

  const bulletinsPerPage = 9;
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
          <h1>Games</h1>
          <p className='bp'>Explore the vastness of space with our selection of space-inspired games! From the classic classic favorites to the newest releases, we have a wide range of exciting titles to satisfy any sci-fi fan. Launch a space shuttle, explore the depths of the universe, and battle aliens in outer space – all without leaving your home. With our library of space games, you can become an intergalactic adventurer and experience the wonders of the galaxy!</p>
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