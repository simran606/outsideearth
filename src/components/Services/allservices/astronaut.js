import React , { useState } from 'react';
import Footer from '../../footer';
import { MenuDiv } from '../../navbar';
import '../../../styles/alls.css';
import bulletins from '../../../data/astronautdata';
import Form from 'react-bootstrap/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import ReactPaginate from "react-paginate";


const LongText = ({ content,limit}) => {  
    if (content.length <= limit) {
      return <p>{content}</p>
    }

    const toShow = content.substring(0, limit) + " ...";

    return <p>{toShow}</p>

}

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
          <p className='bp'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
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
export { LongText };