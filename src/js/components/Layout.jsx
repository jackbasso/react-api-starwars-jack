import React from 'react';
import { Link } from "react-router-dom";
import { Outlet, NavLink } from "react-router-dom";
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

function Layout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}

      <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand><Link to="/" >Star Wars API</Link></Navbar.Brand>
          <Nav className="me-auto">
            <NavLink to="/" className={isActive =>
              "nav-link" + (!isActive ? " unselected" : "")
            }>Home</NavLink>
            <NavLink to="people" className={isActive =>
              "nav-link" + (!isActive ? " unselected" : "")
            }>People</NavLink>
            <NavLink to="planets" className={isActive =>
              "nav-link" + (!isActive ? " unselected" : "")
            }>Planets</NavLink>
            <NavLink to="vehicles" className={isActive =>
              "nav-link" + (!isActive ? " unselected" : "")
            }>Vehicles</NavLink>
          </Nav>
          <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Container>
      </Navbar>
      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}

export default Layout;