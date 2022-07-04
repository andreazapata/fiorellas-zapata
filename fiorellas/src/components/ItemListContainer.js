import React from "react";
import ItemCount from "./ItemCount";

function ItemListContainer({ greeting }) {
  const add = (cantidad) => {
    alert("Agregaste " + cantidad + " producto(s) al carrito.");
  };
  return (
    <>
      <p>{greeting}</p>
      <ItemCount onAdd={add} stock={20} initial={1} />
    </>
  );
}

export default ItemListContainer;
