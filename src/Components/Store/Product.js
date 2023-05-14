import { Card, Button } from "react-bootstrap";
import classes from "./Product.module.css";
import CartContext from "../contexts/cart-context";
import { useContext } from "react";
const Product = (props) => {
  const cartCntxt = useContext(CartContext);
  const addToCartHandler = (event) => {
    event.preventDefault();
    const items = {
      id: props.id,
      image: props.image,
      title: props.title,
      price: Number(props.price),
      amount: Number(1),
    };
    cartCntxt.addItem(items);
  };

  return (
    <div>
      <Card className="border border-light" style={{ margin: "50px" }}>
        <Card.Body className={classes["card-body"]}>
          <Card.Title className={classes.title}>{props.title}</Card.Title>
          <Card.Img src={props.image} alt={props.title} />
          <Card.Text className="m-1">
            <span>Rs.{props.price}</span>
            <Button
              variant="info"
              className={classes.addcart}
              onClick={addToCartHandler}
            >
              Add to Cart
            </Button>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
export default Product;
