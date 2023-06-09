import { Offcanvas, Button } from "react-bootstrap";
import CartItem from "./CartItem";
import CartContext from "../contexts/cart-context";
import { useContext } from "react";

const CartModal = (props) => {
  const cartCntxt = useContext(CartContext);
  const handlecartItems = () => {
    if (cartCntxt.items.length === 0) {
      alert("Your cart is empty. Please add items to purchase.");
    } else {
      alert("Thank you for purchasing.");
      cartCntxt.purchased();
    }
  };
  //console.log(cartCntxt.items);
  return (
    <>
      <Offcanvas
        placement="end"
        scroll="true"
        show={props.onShow}
        onHide={props.Hide}
      >
        <Offcanvas.Header closeButton className="mt-4">
          <Offcanvas.Title
            className="fs-1 fw-bold"
            style={{ marginInline: "auto" }}
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
            {cartCntxt.items.map((item) => {
              return (
                <CartItem
                  key={item.id}
                  id={item.id}
                  title={item.title}
                  price={item.price}
                  quantity={item.amount}
                  image={item.image}
                />
              );
            })}
          </div>
          <div className="d-flex justify-content-end">
            <h2>Total - Rs. {cartCntxt.totalPrice.toFixed(2)}</h2>
          </div>

          <Button
            variant="info"
            className="text-light m-5"
            onClick={handlecartItems}
          >
            PURCHASE
          </Button>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};
export default CartModal;
// show={props.onShow}
//         onHide={props.Hide}
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
