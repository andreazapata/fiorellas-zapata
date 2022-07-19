import React, { useState } from "react";
import ItemDetail from "./ItemDetail";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

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

function ItemDetailContainer() {
  const [loadedProductsList, setLoadedProductsList] = useState([]);
  const { idItem } = useParams();

  useEffect(() => {
    setLoadedProductsList([]);
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
      if (idItem === undefined) {
        setLoadedProductsList(productsList);
      } else {
        setLoadedProductsList(
          productsList.filter((product) => product.id === idItem)
        );
      }
    }
    asyncCall();
  }, [idItem]);
  return (
    <>
      {loadedProductsList.length === 0 ? (
        <p>Cargando...</p>
      ) : (
        <>
          {loadedProductsList.map((product) => {
            return <ItemDetail product={product} />;
          })}
        </>
      )}
    </>
  );
}

export default ItemDetailContainer;
