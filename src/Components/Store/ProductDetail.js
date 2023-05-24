import { useParams } from "react-router-dom";
import { useContext } from "react";
import CartContext from "../contexts/cart-context";
import { Container, Card, CardGroup, Button } from "react-bootstrap";
import { AiOutlineStar } from "react-icons/ai";
import { AiFillStar } from "react-icons/ai";
const ProductDetail = () => {
  const cartCntxt = useContext(CartContext);
  const param = useParams();
  console.log(param.productId);
  const addToCartHandler = () =>{
    cartCntxt.addItem({...cartCntxt.productItem, amount:Number(1)})
  }
  return (
    <>
      <Container className="w-70">
        <CardGroup className="m-3">
          <Card className="p-3">
            <Card.Body>
              <Card.Img
                src={cartCntxt.productItem.image}
                style={{ marginBottom: "10px" }}
              />
              <div className="text-center">
                <Button variant="info" onClick={addToCartHandler}>Add to Cart</Button>
              </div>
            </Card.Body>
          </Card>
          <Card className="p-3">
            <Card.Body>
              <Card.Title style={{ fontSize: "25px" }}>
                {cartCntxt.productItem.title}
              </Card.Title>
              <span></span>
              <Card.Subtitle className="text-info">
                Rs. {cartCntxt.productItem.price.toFixed(2)}
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
                <h6>A good product</h6>
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
                <h6>Awesome product</h6>
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
