import React , { useState } from 'react';
import Footer from '../../footer';
import { MenuDiv } from '../../navbar';
import '../../../styles/alls.css';
import bulletins from '../../../data/astronautdata';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import ReactPaginate from "react-paginate";
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
          <h1>Astronauts</h1>
          <p className='bp'>Space exploration has been the subject of fascination for centuries, and astronauts have been integral to this process. From the first human to venture into space, Yuri Gagarin, to the modern spacefarers of today, astronauts have always been at the forefront of exploring the unknown. They’ve made incredible discoveries and pushed the boundaries of science and technology. These brave individuals have inspired generations of aspiring space travelers and are true heroes of our time.</p>
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










