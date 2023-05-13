import { Container, Navbar } from "react-bootstrap";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSpotify } from "react-icons/fa";

const FooterNav = () => {
  return (
    <div>
      <Navbar className="mt-1" bg="info">
        <Container>
          <Navbar.Text
            className="text-light"
            style={{
              marginBottom: "30px",
              font: "40px Georgia"
            }}
          >
            The Generics
          </Navbar.Text>
          <Navbar.Collapse className="justify-content-end">
          <FaYoutube size="50px" color="red" style={{marginRight:"30px"}}/>
          <FaSpotify size="40px" color="white"style={{marginRight:"30px"}}/>
          <FaFacebookSquare size="40px" color="white"/>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default FooterNav;
