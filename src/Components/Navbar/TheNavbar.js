import { Button, Container, Navbar, Nav, Badge } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import classes from './TheNavbar.module.css';

const TheNavbar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand sticky="top">
      <Container>
        <Nav className="me-auto">
          <Nav.Link href="#home" className={classes.home} style={{color:"white", fontSize:"30px"}}>Home</Nav.Link>
          <Nav.Link href="#store" className={classes.store} style={{color:"white", fontSize:"30px"}}>Store</Nav.Link>
          <Nav.Link href="#about" className={classes.about} style={{color:"white", fontSize:"30px"}}>About</Nav.Link>
        </Nav>
        <div>
          <Button variant="outline-info">
            <FaShoppingCart /> <Badge bg="info">0</Badge>
          </Button>
        </div>
      </Container>
    </Navbar>
  );
};
export default TheNavbar;
