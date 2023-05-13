import { Card, Button } from "react-bootstrap";
import classes from "./Product.module.css";
const Product = (props) => {
  return (
    <div>
      <Card className="border border-light" style={{margin:"50px"}}>
        <Card.Body className={classes["card-body"]}>
          <Card.Title className={classes.title}>{props.title}</Card.Title>
          <Card.Img src={props.image} alt={props.title} />
          <Card.Text className="m-1">
            <span>Rs.{props.price}</span>
            <Button variant="info" className={classes.addcart}>
              Add to Cart
            </Button>
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};
export default Product;
