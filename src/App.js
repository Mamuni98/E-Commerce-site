import React, { useState, useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./Components/Home/Home";
import Store from "./Components/Store/Store";
import About from "./Components/About/About";
import CartModal from "./Components/Cart/CartModal";
import ErrorPage from "./Components/Error/ErrorPage";
import TheNavbar from "./Components/Navbar/TheNavbar";
import ContactUs from "./Components/ContactUs/ContactUs";
import ProductDetail from "./Components/Store/ProductDetail";
import SignUp from "./Components/Authentication/SignUp";
import LogIn from "./Components/Authentication/LogIn";
import Profile from "./Components/Authentication/Profile";
import AuthContext from "./Components/contexts/auth-context";

function App() {
  const [show, setShow] = useState(false);
  const authCntxt = useContext(AuthContext);
  const showCartHandler = () => {
    setShow(true);
  };
  const hideCartHandler = () => {
    setShow(false);
  };
  const { IsLoggedIn } = authCntxt;

  return (
    <>
      <TheNavbar />
      <CartModal onShow={show} Hide={hideCartHandler} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/store"
          element={
            IsLoggedIn ? (
              <Store showCart={showCartHandler} />
            ) : (
              <Navigate replace to="/logIn" />
            )
          }
        />
        {IsLoggedIn && (
          <Route
            path="/store/:productId"
            element={<ProductDetail showCart={showCartHandler} />}
          />
        )}
        <Route
          path="/about"
          element={IsLoggedIn ? <About /> : <Navigate replace to="/logIn" />}
        />
        <Route path="/contact" element={<ContactUs />} />
        {!IsLoggedIn && <Route path="/signUp" element={<SignUp />} />}
        {!IsLoggedIn && <Route path="/logIn" element={<LogIn />} />}
        {IsLoggedIn && <Route path="/profile" element={<Profile />} />}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
