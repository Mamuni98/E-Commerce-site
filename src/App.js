import React, {useState} from "react";
import Store from "./Components/Store/Store";
import TheNavbar from "./Components/Navbar/TheNavbar";
import CartModal from "./Components/Modal/CartModal";
function App() {
  const [show, setShow] = useState(false);
  const showCartHandler = () => {
    setShow(true);
  };
  const hideCartHandler = () => {
    setShow(false);
  };
  return (
    <>
      <TheNavbar showOffcanvas={showCartHandler} />
      <CartModal onShow={show} Hide={hideCartHandler} />
      <Store showCart={showCartHandler}/>
    </>
  );
}

export default App;
