import React, { useState, useContext, useCallback, useEffect } from "react";
import axios from "axios";
import AuthContext from "./auth-context";
const CartContext = React.createContext({
  items: [],
  totalPrice: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});
export const CartProvider = (props) => {
  const authCntxt = useContext(AuthContext);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(Number(0));
  const [product, setProduct] = useState({});

  const addItemToCart = async (item) => {
    try {
      const existingItemIndex = cartItems.findIndex(
        (prevItem) => prevItem.id === item.id
      );
      const existingCartItem = cartItems[existingItemIndex];
      let updatedItems;
      if (existingCartItem) {
        const updatedItem = {
          ...existingCartItem,
          amount: existingCartItem.amount + item.amount,
        };
        updatedItems = [...cartItems];
        updatedItems[existingItemIndex] = updatedItem;
      } else {
        updatedItems = [...cartItems, item];
      }
      setCartItems(updatedItems);
      setTotalPrice((prevTotal) => {
        return prevTotal + item.price;
      });

      const email = localStorage.getItem("email");
      if (email) {
        const userName = email.replace("@", "").replace(".", "");
        await axios.put(
          `https://cart-items-a99b2-default-rtdb.firebaseio.com/${userName}.json`,
          { data: updatedItems }
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const removeItemFromCart = async (id) => {
    try {
      const existingItemIndex = cartItems.findIndex(
        (prevItem) => prevItem.id === id
      );
      const existingCartItem = cartItems[existingItemIndex];

      let updatedItems;
      updatedItems = cartItems.filter((item) => item.id !== id);
      setCartItems(updatedItems);
      setTotalPrice((prevTotal) => {
        return prevTotal - existingCartItem.price * existingCartItem.amount;
      });

      const email = localStorage.getItem("email");
      if (email) {
        const userName = email.replace("@", "").replace(".", "");
        await axios.put(
          `https://cart-items-a99b2-default-rtdb.firebaseio.com/${userName}.json`,
          { data: updatedItems }
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const purchasedItems = async () => {
    try {
      setCartItems([]);
      setTotalPrice(Number(0));
      const email = localStorage.getItem("email");
      if (email) {
        const userName = email.replace("@", "").replace(".", "");
        await axios.delete(
          `https://cart-items-a99b2-default-rtdb.firebaseio.com/${userName}.json`
        );
      }
    } catch (error) {
      console.log(error);
    }
  };
  
  const setProductDetailHandler = (product) => {
    setProduct(product);
  };

  const showUserSpecificCartItems = useCallback(async () => {
    if (authCntxt.IsLoggedIn) {
      try {
        const email = localStorage.getItem("email");
        if (email) {
          const userName = email.replace("@", "").replace(".", "");
          const response = await axios.get(
            `https://cart-items-a99b2-default-rtdb.firebaseio.com/${userName}.json`
          );
          if (response.data) {
            const data = response.data;
            let items;
            for (let key in data) {
              items = data[key];
            }
            let price = 0;

            items.forEach((item) => {
              price += Number(item.price) * Number(item.amount);
            });
            setCartItems(items);

            setTotalPrice(price);
          }
        }
      } catch (error) {
        console.log(error);
      }
    }
  }, [authCntxt.IsLoggedIn]);

  useEffect(() => {
    showUserSpecificCartItems();
  }, [showUserSpecificCartItems]);

  const cartContext = {
    items: cartItems,
    totalPrice: totalPrice,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
    purchased: purchasedItems,
    product: product,
    addProductDetail: setProductDetailHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
