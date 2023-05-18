import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Store from "./Components/Store/Store";
import About from "./Components/About/About";
import CartModal from "./Components/Cart/CartModal";
//import RootLayout from "./Components/Navbar/RootLayout";
import ErrorPage from "./Components/Error/ErrorPage";
import TheNavbar from "./Components/Navbar/TheNavbar";
// const routes = createBrowserRouter([
//   {
//     path: "/",
//     element: <RootLayout />,
//     errorElement: <ErrorPage />,
//     children: [
//       { path: "/", element: <Home /> },
//       { path: "/store", element: <Store /> },
//       { path: "/about", element: <About /> },
//       { path: "/cart", element: <CartModal /> },
//     ],
//   },
// ]);

function App() {
  const [show, setShow] = useState(false);
  const showCartHandler = () => {
    setShow(true);
  };
  const hideCartHandler = () => {
    setShow(false);
  };
  return (
    <BrowserRouter>
      <>
        <TheNavbar />
        <CartModal onShow={show} Hide={hideCartHandler}/>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/cart" element={<CartModal onShow={show} Hide={hideCartHandler}/>} /> */}
          <Route path="/store" element={<Store showCart={showCartHandler}/>} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
