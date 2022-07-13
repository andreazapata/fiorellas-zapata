import React, { useState } from "react";
import ItemCount from "./ItemCount";
import ItemList from "./ItemList";

const productsList = [
  {
    name: "Flores 1",
    stock: 5,
    price: 1234,
    img: "https://img.ltwebstatic.com/images3_pi/2021/08/02/1627867456a7ece96a66537e5ca69ea210c2e30f6c_thumbnail_600x.webp",
    id: "1",
  },
  {
    name: "Flores 2",
    stock: 5,
    price: 1234,
    img: "https://img.ltwebstatic.com/images3_pi/2022/02/28/1646026419341b96f36957a403333079bf4b9611fe_thumbnail_600x.webp",
    id: "2",
  },
  {
    name: "Flores 3",
    stock: 5,
    price: 1234,
    img: "https://img.ltwebstatic.com/images3_pi/2022/02/28/1646026441530138c8252905361d702595f8bb49d4_thumbnail_600x.webp",
    id: "3",
  },
  {
    name: "Flores 4",
    stock: 5,
    price: 1234,
    img: "https://img.ltwebstatic.com/images3_pi/2022/01/10/1641814161a05648155408869d7f7c561229a7839b_thumbnail_600x.webp",
    id: "4",
  },
];

function ItemListContainer({ greeting }) {
  const [loadedProductsList, setLoadedProductsList] = useState([]);

  function myPromise() {
    return new Promise((resolve, reject) => {
      let prueba = true;
      setTimeout(() => {
        if (prueba) {
          resolve("resolved");
        } else {
          console.log("error:", reject);
        }
      }, 2000);
    });
  }

  async function asyncCall() {
    await myPromise();
    setLoadedProductsList(productsList);
  }
  asyncCall();

  const add = (cantidad) => {
    alert("Agregaste " + cantidad + " producto(s) al carrito.");
  };

  return (
    <>
      <p>{greeting}</p>
      <ItemCount onAdd={add} stock={5} initial={1} />
      {loadedProductsList.length === 0 ? (
        <p>Cargando...</p>
      ) : (
        <>
          <ItemList product={productsList} />
        </>
      )}
    </>
  );
}

export default ItemListContainer;
