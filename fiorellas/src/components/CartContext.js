import { createContext, useState } from "react";

export const CartContext = createContext();

const CartContextProvider = ({ children }) => {
  const [cartList, setCartList] = useState([]);

  const addToCart = (item, cantidad) => {
    let found = cartList.find((product) => product.id === item.id);

    if (found === undefined) {
      setCartList([
        ...cartList,
        {
          id: item.id,
          name: item.name,
          img: item.img,
          price: item.price,
          qty: cantidad,
          stock: item.stock,
        },
      ]);
    } else {
      found.qty += cantidad;
      setCartList([...cartList]);
    }
  };

  const removeList = () => {
    setCartList([]);
  };

  const deleteItem = (id) => {
    let result = cartList.filter((item) => item.id !== id);
    setCartList(result);
  };

  let qtyArr = [];
  let totalArr = [];
  let total = 0;

  for (let i = 0; i < cartList.length; i++) {
    qtyArr.push(cartList[i].qty);
    totalArr.push(cartList[i].price);
  }

  for (let i = 0; i < totalArr.length; i++) {
    total += totalArr[i] * qtyArr[i];
  }

  return (
    <CartContext.Provider
      value={{ cartList, addToCart, removeList, deleteItem, total }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
