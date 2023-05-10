import { Card, Button } from "react-bootstrap";
import classes from "./Product.module.css";
const Product = (props) => {
  return (
    <Card
      className={classes.card}
      style={{ borderRadius: "0px", borderColor: "white" }}
    >
      <Card.Body>
        <Card.Title style={{ textAlign: "center" }}>{props.title}</Card.Title>
        <Card.Img src={props.image} alt={props.title} />
        <Card.Text className="m-1">
          <div>
            Rs.{props.price}
            <Button variant="info" style={{ marginLeft: "155px" }}>
              Add to Cart
            </Button>
          </div>
        </Card.Text>
      </Card.Body>
    </Card>
  );
};
export default Product;
