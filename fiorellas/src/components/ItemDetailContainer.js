import React, { useState } from "react";
import ItemDetail from "./ItemDetail";

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
  const [loading, setLoading] = useState(false);

  const task = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, 3000);
  });

  task.then(
    (res) => {
      setLoading(true);
    },
    (err) => {
      console.log("error");
    }
  );

  console.log("ItemDetailCont", productsList);

  return (
    <>
      {!loading ? (
        <p>Cargando...</p>
      ) : (
        <>
          <p>cargado</p>
          {productsList.map((product) => {
            return <ItemDetail product={product} />;
          })}
        </>
      )}
    </>
  );
}

export default ItemDetailContainer;
