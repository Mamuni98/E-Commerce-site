import { useParams } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../contexts/cart-context";
import { Container, Card, CardGroup, Button } from "react-bootstrap";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
import CartIcon from "../Cart/CartIcon";
const ProductDetail = (props) => {
  const cartCntxt = useContext(CartContext);
  const param = useParams();
  console.log(param.productId);
  const addToCartHandler = () => {
    cartCntxt.addItem({ ...cartCntxt.product, amount: Number(1) });
    alert("1 Item added to the cart");
  };
  return (
    <>
      <CartIcon onClick={props.showCart} />
      <Container className="w-70">
        <CardGroup className="m-3">
          <Card className="p-3" style={{ borderColor: "white" }}>
            <Card.Body>
              <Card.Img
                src={cartCntxt.product.image}
                style={{ marginBottom: "10px" }}
              />
              <div className="text-center">
                <Button variant="info" onClick={addToCartHandler}>
                  Add to Cart
                </Button>
              </div>
            </Card.Body>
          </Card>
          <Card className="p-3" style={{ borderColor: "white" }}>
            <Card.Body>
              <Card.Title style={{ fontSize: "25px" }}>
                {cartCntxt.product.title}
              </Card.Title>{" "}
              <Card.Subtitle className="text-info">
                Rs. {cartCntxt.product.price.toFixed(2)}
              </Card.Subtitle>
              <br />
              <div className="d-flex flex-reverse mb-1">
                <AiFillStar size="20px" color="yellow" />
                <AiFillStar size="20px" color="yellow" />
                <AiFillStar size="20px" color="yellow" />
                <AiOutlineStar size="20px" />
                <AiOutlineStar size="20px" />
              </div>
              <Card.Text>
                <span style={{ fontWeight: "bold" }}>A good product</span>
                <br/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda, sit! Velit a commodi quis, dicta deleniti voluptatum
                quibusdam? Repellendus ducimus ea laudantium ex, esse quisquam
                ipsa fugnsequatur, nisi quam similique numquam maxime a delectus
                saepe ratione sit. Excepturi iste repellat doloribus eligendi
                aperiam natus?Repellendus ducimus ea laudantium ex, esse
                quisquam ipsa fugnsequatur, nisi quam similique numquam maxime a
                delectus saepe ratione sit.
              </Card.Text>
              <br />
              <div className="d-flex flex-reverse mb-1">
                <AiFillStar size="20px" color="yellow" />
                <AiFillStar size="20px" color="yellow" />
                <AiFillStar size="20px" color="yellow" />
                <AiFillStar size="20px" color="yellow" />
                <AiOutlineStar size="20px" />
              </div>
              <Card.Text>
                <span style={{ fontWeight: "bold" }}>Awesome product</span>
                <br/>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda, sit! Velit a commodi quis, dicta deleniti voluptatum
                quibusdam? Repellendus ducimus ea laudantium ex, esse quisquam
                ipsa fugnsequatur, nisi quam similique numquam maxime a delectus
                saepe ratione sit. Excepturi iste repellat doloribus eligendi
                aperiam natus?Repellendus ducimus ea laudantium ex, esse
                quisquam ipsa fugnsequatur, nisi quam similique numquam maxime a
                delectus saepe ratione sit.
              </Card.Text>
            </Card.Body>
          </Card>
        </CardGroup>
      </Container>
    </>
  );
};
export default ProductDetail;
