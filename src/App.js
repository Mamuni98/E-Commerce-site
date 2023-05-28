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
import axios from "axios";
import SignUp from "./Components/Authentication/SignUp";
import LogIn from "./Components/Authentication/LogIn";
import Profile from "./Components/Authentication/Profile";
import AuthContext from "./Components/contexts/auth-context";

function App() {
  const authCntxt = useContext(AuthContext);
  const { IsLoggedIn } = authCntxt;
  const [show, setShow] = useState(false);
  const showCartHandler = () => {
    setShow(true);
  };
  const hideCartHandler = () => {
    setShow(false);
  };
  const saveUserDetailHandler = async (detail) => {
    try {
      //console.log(detail);
      const response = await axios.post(
        "https://e-commerce-cad78-default-rtdb.firebaseio.com/e-commerce.json",
        detail
      );
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <TheNavbar />
      <CartModal onShow={show} Hide={hideCartHandler} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={IsLoggedIn ? <Store showCart={showCartHandler} /> : <Navigate replace to="/logIn"/>} />
        <Route path="/store/:productId" element={<ProductDetail />} />
        <Route path="/about" element={IsLoggedIn ? <About /> : <Navigate replace to="/logIn"/>} />
        <Route
          path="/contact"
          element={<ContactUs userDetail={saveUserDetailHandler} />}
        />
        {!IsLoggedIn && <Route path="/signUp" element={<SignUp />} />}
        {!IsLoggedIn && <Route path="/logIn" element={<LogIn />} />}
        {IsLoggedIn && <Route path="/profile" element={<Profile />} />}
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
