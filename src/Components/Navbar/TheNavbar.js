import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import classes from "./TheNavbar.module.css";

const TheNavbar = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="sm" sticky="top">
        <Container fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className={classes.list}>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
                end
              >
                Home
              </NavLink>

              <NavLink
                to="/store"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Store
              </NavLink>

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive ? classes.active : undefined
                }
              >
                Contact Us
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default TheNavbar;
//activeClassName={classes.active}---> Version 5 react-router-dom
