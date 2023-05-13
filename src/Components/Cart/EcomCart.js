import { Button } from "react-bootstrap";

const EcomCart = (props) => {
  return (
   <div className="modal">
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header"><h2>Cart</h2></div>
        <div className="modal-body"></div>
        <div className="modal-footer">
          <Button variant="info" onClick="props.Hide">Close</Button>
        </div>
      </div>
    </div>
   </div>
  );
};
export default EcomCart;
