import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

function NavbarComponent() {
  return (
    <Navbar collapse expand="lg" bg="dark" sticky="top" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Brand href="/">amazon</Navbar.Brand>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="/women">Women</Nav.Link>
            <Nav.Link href="/men">Men</Nav.Link>
            <Nav.Link href="/electronics">Electronics</Nav.Link>
            <Nav.Link href="/jewellery">Jewellery</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="/login">Log in</Nav.Link>
            <Nav.Link>Cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
