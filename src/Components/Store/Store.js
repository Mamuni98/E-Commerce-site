import { Button, Container } from "react-bootstrap";
import React from "react";
import GenericNav from "../Navbar/GenericNav";
import Product from "./Product";
import FooterNav from "../Navbar/FooterNav";
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

const Store = (props) => {
  return (
    <>
      <GenericNav />
      <Container>
        <div className={classes.heading}>
          <h2>Merch</h2>
        </div>
        <div className={classes.product}>
          {productsArr.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.imageUrl}
            />
          ))}
        </div>
        <div className={classes.heading}>
          <h2>Music</h2>
        </div>
        <div className={classes.product}>
          {albumsArr.map((product) => (
            <Product
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              image={product.imageUrl}
            />
          ))}
        </div>
        <div className="text-center">
          <Button
            variant="secondary"
            className={classes.showcart}
            style={{ color: "aqua", fontSize: "20px" }}
            onClick={props.showCart}
          >
            See the cart
          </Button>
        </div>
      </Container>
      <FooterNav />
    </>
  );
};
export default Store;
// xs={1} md={2}
// xs={1} md={2} className="g-3"
