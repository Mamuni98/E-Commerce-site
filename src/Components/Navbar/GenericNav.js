import { Container, Navbar } from "react-bootstrap";

const GenericNav = () => {
  return (
    <>
      <Navbar className="mt-1" bg="secondary" expand>
        <Container className="justify-content-center">
          <Navbar.Text
            className="text-light"
            style={{
              marginBottom: "60px",
              font: "90px Georgia",
              fontWeight: "700px",
            }}
          >
            The Generics
          </Navbar.Text>
        </Container>
      </Navbar>
    </>
  );
};
export default GenericNav;
