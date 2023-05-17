import { Button, Container, Navbar, Nav, Badge } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import styles from "./TheNavbar.module.css";
import CartContext from "../contexts/cart-context";
import { useContext } from "react";
import { NavLink } from "react-router-dom";
import classes from "./TheNavbar.module.css";

const TheNavbar = (props) => {
  const cartCntxt = useContext(CartContext);
  const numberOfCartItems = cartCntxt.items.reduce((currNumber, item) => {
    return currNumber + Number(item.amount);
  }, 0);
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="sm" sticky="top">
        <Container className={styles.text} fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className={classes.list}>
              <Nav.Link>
                <NavLink  
                  to="/"
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                  end
                >
                  Home
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink
                  to="/store"
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                >
                  Store
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    isActive ? classes.active : undefined
                  }
                >
                  About
                </NavLink>
              </Nav.Link>
            </Nav>
           
              <Button variant="outline-info" className={classes.carticon} onClick={props.showOffcanvas}>
                <FaShoppingCart /> <Badge bg="info">{numberOfCartItems}</Badge>
              </Button>
           
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default TheNavbar;
