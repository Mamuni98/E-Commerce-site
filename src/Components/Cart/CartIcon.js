import { Button, Badge } from "react-bootstrap";
import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import CartContext from "../contexts/cart-context";

const CartIcon = (props) => {
  const cartCntxt = useContext(CartContext);
  const numberOfCartItems = cartCntxt.items.reduce((currNumber, item) => {
    return currNumber + Number(item.amount);
  }, 0);
  return (
    <div>
      <Button
        variant="outline-info"
        style={{ position: "fixed", right: "0.2cm", top: "0.5cm", zIndex:"9999"}}
        onClick={props.onClick}
      >
        <FaShoppingCart /> <Badge bg="info">{numberOfCartItems}</Badge>
      </Button>
    </div>
  );
};
export default CartIcon;
