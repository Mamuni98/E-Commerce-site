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
      <Container className="px-4">
      <div className={classes.items}>
        <h2>TOUR</h2>
        <div>
          <span>JUL16</span>
          <span>DETROIT, MI</span>
          <span>DTE ENERGY MUSIC THEATRE</span>
          <button type="button" className="btn btn-info btn-sm">
            BUY TICKETS
          </button>
        </div>
        <div>
          <span>JUL19</span>
          <span>TORONTO,ON</span>
          <span>BUDWEISER STAGE</span>
          <button type="button" className="btn btn-info btn-sm">
            BUY TICKETS
          </button>
        </div>
        <div>
          <span>JUL22</span>
          <span>BRISTOW, VA</span>
          <span>JIGGY LUBE LIVE</span>
          <button type="button" className="btn btn-info btn-sm">
            BUY TICKETS
          </button>
        </div>
        <div>
          <span>JUL29</span>
          <span>PHOENIX, AZ</span>
          <span>AK-CHIN PAVILION</span>
          <button type="button" className="btn btn-info btn-sm">
            BUY TICKETS
          </button>
        </div>
        <div>
          <span>JUL31</span>
          <span>LAS VEGAS,TC</span>
          <span>T-MOBILE ARENA</span>
          <button type="button" className="btn btn-info btn-sm">
            BUY TICKETS
          </button>
        </div>
        <div>
          <span>AUG10</span>
          <span>CONCORD, CA</span>
          <span>CONCORD PAVILION</span>
          <button type="button" className="btn btn-info btn-sm">
            BUY TICKETS
          </button>
        </div>
      </div>
      </Container>
      <FooterNav />
    </>
  );
};
export default Home;
