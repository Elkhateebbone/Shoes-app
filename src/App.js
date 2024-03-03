import {BrowserRouter as Router , Routes,Route} from "react-router-dom";
import { ShopContext } from './Shop-Context';
import  { useContext } from 'react'


import Sidebar from './Components/Sidebar';
import { Container, Row, Col } from 'react-bootstrap';
import {Shop} from './Shop/Shop.jsx';
import { ShopContextProvider } from '../src/Shop-Context.js';
import CartShop from "./Shop/CartShop.js";

function App() {
  return (
    <Container fluid>
           {/* <ShopContextProvider> */}
           <ShopContextProvider> 

      <Row>
        <Col md={2} className="p-0">
          <Sidebar />
        </Col>
        <Col md={10} className="p-0">
          {/* <Navbar onSearch={handleSearch}/> */}
          {/* Move Router here */}
          <Router>
            <Routes>
              <Route path="/" element={<Shop />} />
              <Route path="/cart" element={<CartShop />} />

              {/* Add more routes as needed */}
            </Routes>
          </Router>
        </Col>
      </Row>
      </ShopContextProvider> 

      {/* </ShopContextProvider> */}

    </Container>
  );
}

export default App;
