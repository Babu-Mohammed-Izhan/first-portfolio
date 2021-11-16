import { Container, Navbar } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";

const Navigation = () => {
  // const handleScroll = () => {};

  // window.addEventListener("scroll", handleScroll);
  return (
    <Navbar bg="white" expand="md" variant="light" fixed="top">
      <Container>
        <Navbar.Brand href="#home" className="font-secondary" id="logo">
          Izhan
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="navbutton" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            <Nav.Link id="nav-link" href="#frontpage">
              Home
            </Nav.Link>
            <Nav.Link href="#projects" id="nav-link">
              Projects
            </Nav.Link>
            <Nav.Link activeClassName={"active"} href="#skills" id="nav-link">
              Skills
            </Nav.Link>
            <Nav.Link activeClassName={"active"} href="#contact" id="nav-link">
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
