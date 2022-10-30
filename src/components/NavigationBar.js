import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

export default function NavigationBar() {
  return (
    <div>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand
            as={Link}
            to="/"
            onClick={() => {
              window.location.pathname === "/" && window.location.reload() /*causes page reload when clicking on site name*/
             } }
          >
            FF14 Mount Organizer
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" onClick={() => {
              window.location.pathname === "/" && window.location.reload() /*causes page reload when clicking on site name*/
             } }>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/mycollection">
              My Collection
            </Nav.Link>
            <Nav.Link as={Link} to="/wishlist">
              My Wishlist
            </Nav.Link>
            <Nav.Link as={Link} to="/about">
              About
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
}
