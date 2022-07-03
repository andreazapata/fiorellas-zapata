import React from "react";
import ItemCount from "./ItemCount";

function ItemListContainer() {
  const add = (cantidad) => {
    alert("Agregaste " + cantidad + " producto(s) al carrito.");
  };
  return (
    <>
      <p>Hola, soy el container :D </p>
      <ItemCount onAdd={add} stock={20} initial={1} />
    </>
  );
}

export default ItemListContainer;
