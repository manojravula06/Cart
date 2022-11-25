import {useNavigate} from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";

function NavbarItem() {
  const navigate = useNavigate();

  const goToWomenClothing = (e) => {
    e.preventDefault();
    navigate(`/womenclothing`);
  };
  const goToMensClothing = (e) => {
    e.preventDefault();
    navigate(`/mensclothing`);
  };
  const goToElectronics = (e) => {
    e.preventDefault();
    navigate(`/electronics`);
  };
  const goToJewellery= (e) => {
    e.preventDefault();
    navigate(`/jewellery`);
  };
  const goToHome=(e)=>{
    e.preventDefault();
    navigate(`/`);
  }
  const goToLogin=(e)=>{
    e.preventDefault();
    navigate(`/login`);
  }
  return (
    <Navbar collapse expand="lg" bg="dark" sticky="top" variant="dark">
      <Container>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Brand href="#home" onClick={goToHome}>Logo</Navbar.Brand>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link onClick={goToWomenClothing}>Women</Nav.Link>
            <Nav.Link onClick={goToMensClothing}>Men</Nav.Link>
            <Nav.Link onClick={goToElectronics}>Electronics</Nav.Link>
            <Nav.Link onClick={goToJewellery}>Jewellery</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Nav.Link onClick={goToLogin}>Log in</Nav.Link>
            <Nav.Link href="">Cart</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarItem;
