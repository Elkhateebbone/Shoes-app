import React, { useState } from 'react'

import { Container, Row, Col, Nav ,Form} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faCog } from '@fortawesome/free-solid-svg-icons';

export const Sidebar = ({getPrice,getColor}) => {
  const [priceFilter, setPriceFilter] = useState([]);

  const handlePriceFilterChange = (event) => {
    const { value, checked } = event.target;
    let updatedPriceFilter;
  
    if (checked && value !== 'all') {

      updatedPriceFilter = [...priceFilter, value];
    } else {
      updatedPriceFilter = priceFilter.filter((price) => price !== value);
    }
  
    setPriceFilter(updatedPriceFilter);
    console.log(updatedPriceFilter)
    getPrice(value);
  };

 const onClickColor = (color) =>{
    getColor(color);
 }



  const ColorCheckbox = ({ color, label, onClick }) => (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '5px',
        cursor: 'pointer',
      }}
      onClick={() => onClick(color)}
    >
      <div
        style={{
          width: '20px',
          height: '20px',
          borderRadius: '50%',
          marginRight: '10px',
          backgroundColor: color,
          border: '1px solid #ced4da',
        }}
      ></div>
      {label}
    </div>
  );
  return (
    <Container fluid>
    <Row>
      <Col md={2} className="sidebar">
        <Nav className="flex-column">
          
          <Form>
            <Form.Label>Price</Form.Label>
            <Form.Check
              type="checkbox"
              label="All"
              value="all"
              onChange={handlePriceFilterChange}
              checked={priceFilter.includes('all')}
            />
            <Form.Check
              type="checkbox"
              label="0-50"
              value="0-50"
              onChange={handlePriceFilterChange}
              checked={priceFilter.includes('0-50')}
            />
            <Form.Check
              type="checkbox"
              label="50-100"
              value="50-100"
              onChange={handlePriceFilterChange}
              checked={priceFilter.includes('50-100')}
            />
            <Form.Check
              type="checkbox"
              label="100-150"
              value="100-150"
              onChange={handlePriceFilterChange}
              checked={priceFilter.includes('100-150')}
            />
            <Form.Check
              type="checkbox"
              label="Over 150"
              value="over-150"
              onChange={handlePriceFilterChange}
              checked={priceFilter.includes('over-150')}
            />
            <hr />
           
             
            <Form.Label>Colors</Form.Label>
              <ColorCheckbox color="black" label="Black" onClick={()=>onClickColor("black")}/>
              <ColorCheckbox color="blue" label="Blue" onClick={()=>onClickColor("blue")}/>
              <ColorCheckbox color="red" label="red" onClick={()=>onClickColor("red")}/>
              <ColorCheckbox color="green" label="Green" onClick={()=>onClickColor("green")}/>
              <ColorCheckbox color="white" label="White" onClick={()=>onClickColor("black")}/>
            </Form>
        </Nav>
      </Col>
      <Col md={10} className="content">
        {/* Your main content here */}
      </Col>
    </Row>
  </Container>
  )
}
export default Sidebar