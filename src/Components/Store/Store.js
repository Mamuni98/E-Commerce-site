import { Button, Col, Row } from "react-bootstrap";
import GenericNav from "../Navbar/GenericNav";
import Product from "./Product";
import classes from "./Store.module.css";
const productsArr = [
  {
    id: "a1",
    title: "Colors",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    id: "a2",
    title: "Black and white Colors",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    id: "a3",
    title: "Yellow and Black Colors",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    id: "a4",
    title: "Blue Color",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];
const albumsArr = [
  {
    id: "p1",
    title: "Album-1",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
  },

  {
    id: "p2",
    title: "Album-2",
    price: 50,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
  },

  {
    id: "p3",
    title: "Album-3",
    price: 70,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
  },

  {
    id: "p4",
    title: "Album-4",
    price: 100,
    imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
  },
];

const Store = () => {
  return (
    <>
      <GenericNav />
      <div className={classes.heading}>
        <h2>Merch</h2>
      </div>
      <Row xs={1} md={2} className="g-3">
        {productsArr.map((product) => (
          <Col style={{ paddingLeft: "135px" }}>
            <Product
              key={product.id}
              title={product.title}
              price={product.price}
              image={product.imageUrl}
            />
          </Col>
        ))}
      </Row>
      <div className={classes.heading}>
        <h2>Music</h2>
      </div>
      <Row xs={1} md={2} className="g-3">
        {albumsArr.map((product) => (
          <Col style={{ paddingLeft: "135px" }}>
            <Product
              key={product.id}
              title={product.title}
              price={product.price}
              image={product.imageUrl}
            />
          </Col>
        ))}
      </Row>
      <div className="text-center">
        <Button
          variant="secondary"
          style={{
            color: "aqua",
            fontSize: "20px",
            margin: "10px",
            marginTop: "100px",
          }}
        >
          See the cart
        </Button>
      </div>
    </>
  );
};
export default Store;
