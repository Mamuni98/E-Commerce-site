import { Image } from "react-bootstrap";
import CartContext from "../contexts/cart-context";
import { useContext } from "react";
const CartItem = (props) => {
  const cartCntxt = useContext(CartContext);
  const removeItemFromCartHandler = (event) => {
    event.preventDefault();
    cartCntxt.removeItem(props.id);
  }
  return (
    <div className="d-flex flex-nowrap justify-content-between mb-3">
      <div className="d-flex flex-nowrap justify-content-start">
        <Image
          src={props.image}
          style={{ height: "75px", width: "75px" }}
          rounded
        />
        <h6 className="fw-normal fs-sm" style={{ fontSize: "13px" }}>
          {props.title}
        </h6>
      </div>

      <div className="d-flex flex-nowrap pb-5">
        <h6 className=" text-info fw-bold me-3">Rs.{props.price}</h6>
        <button className="btn btn-outline-info me-2 ms-2">
          {props.quantity}
        </button>
        <button className="btn btn-danger" onClick={removeItemFromCartHandler}>Remove</button>
      </div>
    </div>
  );
};
export default CartItem;
