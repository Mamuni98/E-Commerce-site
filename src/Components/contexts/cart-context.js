import React, { useState } from "react";
const CartContext = React.createContext({
  items: [],
  totalPrice: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});
export const CartProvider = (props) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(Number(0));
  const [productItem, setProductItem] = useState({});

  const addItemToCart = (item) => {
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
  };

  const removeItemFromCart = (id) => {
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
  };
  const purchasedItems = () => {
    setCartItems([]);
    setTotalPrice(Number(0));
  };
  const setProductDetailHandler = (product) =>{
    setProductItem(product);
  }

  const cartContext = {
    items: cartItems,
    totalPrice: totalPrice,
    addItem: addItemToCart,
    removeItem: removeItemFromCart,
    purchased: purchasedItems,
    productItem: productItem,
    addProductDetail: setProductDetailHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContext;
