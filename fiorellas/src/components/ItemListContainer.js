import React, { useState, useEffect } from "react";
// import ItemCount from "./ItemCount";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";

const productsList = [
  {
    name: "Flores 1",
    stock: 5,
    price: 1234,
    img: "https://img.ltwebstatic.com/images3_pi/2021/08/02/1627867456a7ece96a66537e5ca69ea210c2e30f6c_thumbnail_600x.webp",
    id: "1",
    category: "girasoles",
  },
  {
    name: "Flores 2",
    stock: 5,
    price: 1234,
    img: "https://img.ltwebstatic.com/images3_pi/2022/02/28/1646026419341b96f36957a403333079bf4b9611fe_thumbnail_600x.webp",
    id: "2",
    category: "rosas",
  },
  {
    name: "Flores 3",
    stock: 5,
    price: 1234,
    img: "https://img.ltwebstatic.com/images3_pi/2022/02/28/1646026441530138c8252905361d702595f8bb49d4_thumbnail_600x.webp",
    id: "3",
    category: "girasoles",
  },
  {
    name: "Flores 4",
    stock: 5,
    price: 1234,
    img: "https://img.ltwebstatic.com/images3_pi/2022/01/10/1641814161a05648155408869d7f7c561229a7839b_thumbnail_600x.webp",
    id: "4",
    category: "rosas",
  },
];

function ItemListContainer() {
  const [loadedProductsList, setLoadedProductsList] = useState([]);
  const { idCategory } = useParams();

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
      if (idCategory === undefined) {
        setLoadedProductsList(productsList);
      } else {
        setLoadedProductsList(
          productsList.filter((product) => product.category === idCategory)
        );
      }
    }
    asyncCall();
  }, [idCategory]);

  // const add = (cantidad) => {
  //   alert("Agregaste " + cantidad + " producto(s) al carrito.");
  // };

  return (
    <>
      <div>
        {idCategory === undefined ? (
          <div className="bg-secondary py-5">
            <div className="container px-4 px-lg-5 my-5">
              <div className="text-center text-white">
                <h1 className="display-4 fw-bolder">Shop in style</h1>
                <p className="lead fw-normal text-white-50 mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}

        <div className="container px-4 px-lg-5 mt-5">
          <div className="pricing-header px-3 py-3 pb-md-4 mx-auto text-center">
            {idCategory === undefined ? (
              <div>
                <div>
                  <h2 className="display-4">Novedades</h2>
                  <p className="lead">
                    Conoce nuestras nuevas creaciones, nuestros productos más
                    populares y los mejor puntuados.
                  </p>
                </div>
              </div>
            ) : (
              <div>
                <h2 className="display-4">
                  {idCategory.charAt(0).toUpperCase() + idCategory.slice(1)}
                </h2>
                <p className="lead">
                  Conoce nuestra selección en {idCategory}.
                </p>
              </div>
            )}
          </div>
          <br></br>
          <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4 justify-content-md-center">
            {loadedProductsList.length === 0 ? (
              <h1 className="text-center">Cargando ...</h1>
            ) : (
              <ItemList product={loadedProductsList} />
            )}
          </div>
        </div>
      </div>
      );
    </>
  );
}

export default ItemListContainer;
