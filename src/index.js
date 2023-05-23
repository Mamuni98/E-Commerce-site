import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App";
import { CartProvider } from "./Components/contexts/cart-context";
import "../node_modules/react-bootstrap/dist/react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
  <CartProvider>
    <App />
  </CartProvider>
  </BrowserRouter>
);

//ROUTER V5
/* <header>
<TheNavbar />
<CartModal onShow={show} Hide={hideCartHandler} />
</header>
<main>
<Route path="/">
  <Home />
</Route>
<Route path="/store">
  <Store showCart={showCartHandler} />
</Route>
<Route path="/about">
  <About />
</Route>
<Route path="*">
  <ErrorPage />
</Route>
</main> */