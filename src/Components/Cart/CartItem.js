import { Image } from "react-bootstrap";
const CartItem = (props) => {
  return (
    <div className="d-flex flex-nowrap justify-content-between mb-4 p-1">
      <div className="d-flex flex-nowrap justify-content-start">
        <Image
          src={props.image}
          style={{ height: "70px", width: "70px" }}
          rounded
        />
        <h6>{props.title}</h6>
      </div>
      <div>
        <h6 className=" text-info fw-bold">Rs.{props.price}</h6>
      </div>

      <div className="d-flex flex-nowwrap pb-5">
        <button className="btn btn-outline-info me-2 ms-2">
          {props.quantity}
        </button>
        <button className="btn btn-danger">Remove</button>
      </div>
    </div>
  );
};
export default CartItem;
