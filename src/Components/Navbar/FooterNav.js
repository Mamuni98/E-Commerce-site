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
              font: "40px Georgia",
            }}
          >
            The Generics
          </Navbar.Text>
          <Navbar.Collapse className="justify-content-end">
            <a href="https://www.youtube.com/" target="-blank">
              <FaYoutube
                size="50px"
                color="red"
                style={{ marginRight: "30px" }}
              />
            </a>
            <a href="https://open.spotify.com/" target="-blank">
              <FaSpotify
                size="40px"
                color="white"
                style={{ marginRight: "30px" }}
              />
            </a>
            <a href="https://www.facebook.com/" target="-blank">
              <FaFacebookSquare size="40px" color="white" />
            </a>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default FooterNav;
