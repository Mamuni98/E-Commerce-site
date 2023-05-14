import { Offcanvas, Button } from "react-bootstrap";
import CartItem from "../Cart/CartItem";
import CartContext from "../contexts/cart-context";
import { useContext } from "react";
// const cartElements = [
//   {
//     id: "i1",
//     title: "Colors",
//     price: 100,
//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
//     quantity: 2,
//   },

//   {
//     id: "i2",
//     title: "Black and white Colors",
//     price: 50,
//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
//     quantity: 3,
//   },

//   {
//     id: "i3",
//     title: "Yellow and Black Colors",
//     price: 70,
//     imageUrl: "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
//     quantity: 1,
//   },
// ];
const CartModal = (props) => {
  const cartCntxt = useContext(CartContext);
  return (
    <>
      <Offcanvas
        show={props.onShow}
        onHide={props.Hide}
        placement="end"
        scroll="true"
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title
            className="fs-1 fw-bold"
            style={{ marginLeft: "140px" }}
          >
            CART
          </Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body className="text-center">
          <div className="d-flex justify-content-between">
            <h3 className="fs-4 fw-bold text-decoration-underline">Item</h3>
            <h3 className="fs-4 fw-bold text-decoration-underline ms-5">
              Price
            </h3>
            <h3 className="fs-4 fw-bold text-decoration-underline">Quantity</h3>
          </div>
          <div className="d-flex flex-column">
            {cartCntxt.items.map((item) => (
              <CartItem
                key={item.id}
                id={item.id}
                title={item.title}
                price={item.price}
                quantity={item.amount}
                image={item.image}
              />
            ))}
          </div>
          <div className="d-flex justify-content-end">
            <h2>Total - Rs.{cartCntxt.totalPrice.toFixed(2)}</h2>
          </div>

          <Button variant="info" className="text-light m-5">
            PURCHASE
          </Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
export default CartModal;

/* <Modal show>
<Modal.Header>
  <Modal.Title>Shopping Cart</Modal.Title>
</Modal.Header>
<Modal.Body></Modal.Body>
<Modal.Footer>
  <Button variant="info" onClick={props.Hide}>
    Close
  </Button>
</Modal.Footer>
</Modal> */
