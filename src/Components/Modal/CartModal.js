import { Offcanvas, Button } from "react-bootstrap";
const CartModal = (props) => {
  return (
    <>
      <Offcanvas show={props.onShow} onHide={props.Hide} placement="end" scroll="true">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>CART</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Button variant="info">PURCHASE</Button>
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

