import React, {  useState } from 'react'
import {Link} from 'react-router-dom';

import { Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export const NNavbar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');
  
//search func
const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
    onSearch(searchQuery)
  };
 
  return (
   <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#home"> Khateeb  Sh          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form className="d-flex align-items-center">
            <FormControl
              type="search"
              placeholder="Enter Your Match Shoes"
              className="mr-2"
              aria-label="Search"
              value={searchQuery}
              onChange={handleInputChange}
              style={{ backgroundColor: '#f2f2f2' }}
            />
          </Form>
          <Nav className="ml-auto">
            <Link className="nav-link" to="/cart">
              <FontAwesomeIcon icon={faShoppingCart} />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    )
}
export default NNavbar