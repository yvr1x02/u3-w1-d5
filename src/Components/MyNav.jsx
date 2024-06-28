import React from "react";
import { Container, Dropdown, Nav, Navbar } from "react-bootstrap";
import LogoNetflix from "../assets/logo.png";
import UserIcon from "../assets/User-Image.png";
import { BellFill, Search } from "react-bootstrap-icons";

const MyNav = () => {
  return (
    <Navbar expand="lg" className="bg-dark">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img src={LogoNetflix} alt="Netflix Logo" style={{ width: "100px" }} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#TVShows">TV Shows</Nav.Link>
            <Nav.Link href="#Movies">Movies</Nav.Link>
            <Nav.Link href="#RecentlyAdded">Recently Added</Nav.Link>
            <Nav.Link href="#MyList">My List</Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            <Nav.Link href="#Search">
              <Search />
            </Nav.Link>
            <Nav.Link href="#Kids">KIDS</Nav.Link>
            <Nav.Link href="#home">
              <BellFill />
            </Nav.Link>
            <Dropdown>
              <Dropdown.Toggle className="bg-dark border border-0" align={{ sm: "end" }}>
                <img src={UserIcon} alt="Profile Image" style={{ width: "20px" }} />
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Options</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNav;
