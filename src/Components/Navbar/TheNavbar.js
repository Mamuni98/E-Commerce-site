import { Button, Container, Navbar, Nav, Badge } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import styles from "./TheNavbar.module.css";
import CartContext from "../contexts/cart-context";
import { useContext } from "react";

const TheNavbar = (props) => {
  const cartCntxt = useContext(CartContext);
  const numberOfCartItems = cartCntxt.items.reduce((currNumber, item) => {
    return currNumber + Number(item.amount);
  }, 0);
  return (
    <>
      <Navbar bg="dark" variant="dark" expand sticky="top">
        <Container className={styles.text} fluid>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto">
              <Nav.Link href="#home" style={{marginLeft:"430px", marginRight:"20px"}}>Home</Nav.Link>
              <Nav.Link href="#store" style={{marginRight:"20px"}}>Store</Nav.Link>
              <Nav.Link href="#about" >About</Nav.Link>
            </Nav>
            <Button variant="outline-info" onClick={props.showOffcanvas}>
              <FaShoppingCart /> <Badge bg="info">{numberOfCartItems}</Badge>
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};
export default TheNavbar;
