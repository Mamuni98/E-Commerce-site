import { Button, Container, Navbar } from "react-bootstrap";
import { BsFillPlayCircleFill } from "react-icons/bs";
import classes from "./Home.module.css";
import FooterNav from "../Navbar/FooterNav";
const Home = () => {
  return (
    <>
      <Navbar className="mt-1" bg="secondary" expand>
        <Container className="justify-content-center">
          <div className={classes.lists}>
            <Navbar.Text
              className="text-light"
              style={{
                marginBottom: "40px",
                font: "90px Georgia",
                fontWeight: "700px",
              }}
            >
              The Generics
            </Navbar.Text>
            <Button
              variant="outline-info"
              size="lg"
              className="mb-4"
              style={{ fontSize: "30px" }}
            >
              Get our Latest Album
            </Button>
            <Button variant="outline-secondary">
              <BsFillPlayCircleFill color="rgb(16, 214, 244)" size="70px" />
            </Button>
          </div>
        </Container>
      </Navbar>
      <FooterNav />
    </>
  );
};
export default Home;
