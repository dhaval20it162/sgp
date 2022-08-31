import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import "./Navbar.css";

function CollapsibleExample() {
  return (
    <Navbar  className="color-nav" collapseOnSelect expand="lg"  variant="dark">
      <Container>
        <Navbar.Brand href="#home">Grocery</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#Hotdeals">Hot Deals</Nav.Link>
            <NavDropdown title="Category" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#dals">Dals</NavDropdown.Item>
              <NavDropdown.Item href="#pilses">pulses</NavDropdown.Item>
              <NavDropdown.Item href="#Dry fruits">Dry fruits</NavDropdown.Item>
              <NavDropdown.Item href="#Cooking oil">Cooking oil</NavDropdown.Item>
              <NavDropdown.Item href="#Ghee and vanaspati">Ghee and Vanaspati</NavDropdown.Item>
              <NavDropdown.Item href="#Flour and grains">Flours and grains</NavDropdown.Item>
              <NavDropdown.Item href="#Rice and rice products">Rice and rice products</NavDropdown.Item>
              <NavDropdown.Item href="#Masala and Spices">Masala and Spices</NavDropdown.Item>
              <NavDropdown.Item href="#Salt sugar and jaggery">Salt sugar and jaggery</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#Aboutus">About Us</Nav.Link>
          </Nav>
          
          <Nav>
          <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button className="search" variant="outline-success">Search</Button>
                </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;