import React , { useState } from 'react';
import '../styles/navbar.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import data from '../data/footerdata';


function Menubar() {

  const [isOpen, setIsopen] = useState(false);

    const ToggleSidebar = () => {
        isOpen === true ? setIsopen(false) : setIsopen(true);
    }


    return (
        <div  class="navbardiv" >
            <Navbar className='navbarsubdiv' variant="dark" expand="lg">
                <Navbar.Brand href="/"><img className='logo' src="../../logo.png" alt="logo" /></Navbar.Brand>
                {/* <Navbar.Brand href="/"><img className='logo' src="../" alt="logo" /></Navbar.Brand> */}

                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={ToggleSidebar} />
                  <div className={`sidebar ${isOpen === true ? 'active' : ''}`}>
                    <div className="sd-header">
                        <div className="btn close-btn" onClick={ToggleSidebar}>
                          <i className="fa fa-times"></i>
                        </div>
                    </div>
                    <div className="sd-body">
                      <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/aboutus">About Us</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                        <NavDropdown title="Services" id="basic-nav-dropdown">
                          {data.slice(6,14).map((item => {
                            return(
                              <NavDropdown.Item href={item.linkto}>{item.link}</NavDropdown.Item>
                            );
                          }))}
                        </NavDropdown>
                      </Nav>
                    </div>
                  </div>
                  <div className={`sidebar-overlay ${isOpen === true ? 'active' : ''}`} onClick={ToggleSidebar}></div>
            </Navbar>
        </div>
    )
  }


function MenuDiv() {

  const [isOpen, setIsopen] = useState(false);

    const ToggleSidebar = () => {
        isOpen === true ? setIsopen(false) : setIsopen(true);
    }

  return (
      <div  class="navbardiv" >
          <Navbar className='navdivsubdiv' variant="dark" expand="lg">
              <Navbar.Brand href="/"><img className='logo' src="../../logo.png" alt="logo" /></Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={ToggleSidebar} />
                  <div className={`sidebar ${isOpen === true ? 'active' : ''}`}>
                  {/* <img src="../../public/Images/ns1.jpg" alt='navbar-bg' /> */}
                    <div className="sd-header">
                        <div className="btn close-btn" onClick={ToggleSidebar}>
                          <i className="fa fa-times"></i>
                        </div>
                    </div>
                    <div className="sd-body">
                      <Nav className="me-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/aboutus">About Us</Nav.Link>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                        <NavDropdown title="Services" id="basic-nav-dropdown">
                          {data.slice(6,14).map((item => {
                            return(
                              <NavDropdown.Item href={item.linkto}>{item.link}</NavDropdown.Item>
                            );
                          }))}
                        </NavDropdown>
                      </Nav>
                    </div>
                  </div>
                  <div className={`sidebar-overlay ${isOpen === true ? 'active' : ''}`} onClick={ToggleSidebar}></div>
          </Navbar>
      </div>
  )
}

export default Menubar;
export {MenuDiv};
