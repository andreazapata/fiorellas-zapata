import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import db from "./utilities/firebaseutilities";
import { collection, getDocs } from "firebase/firestore";

const ItemListContainer = () => {
  const [products, setProducts] = useState([]);
  const { idCategory } = useParams();

  useEffect(() => {
    const fireStoreFetch = async () => {
      const querySnapshot = await getDocs(collection(db, "items"));

      return querySnapshot.docs.map((document) => ({
        id: document.id,
        ...document.data(),
      }));
    };
    if (idCategory === undefined) {
      fireStoreFetch()
        .then((result) => setProducts(result))
        .catch((error) => console.log(error));
    } else {
      fireStoreFetch()
        .then((result) =>
          setProducts(
            result.filter((product) => product.categoryId === idCategory)
          )
        )
        .catch((error) => console.log(error));
    }
  }, [idCategory]);

  return (
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
              <p className="lead">Conoce nuestra selección en {idCategory}.</p>
            </div>
          )}
        </div>
        <br></br>
        <div className="row row-cols-1 row-cols-md-2 row-cols-xl-4 justify-content-md-center">
          {products.length === 0 ? (
            <h1 className="text-center">Cargando ...</h1>
          ) : (
            <ItemList product={products} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemListContainer;
