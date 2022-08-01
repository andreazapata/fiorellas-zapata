import db from "./utilities/firebaseutilities";
import { collection, getDocs } from "firebase/firestore";
import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [productsDetail, setProductsDetail] = useState([]);
  const { idItem } = useParams();

  useEffect(() => {
    const fireStoreFetch = async () => {
      const querySnapshot = await getDocs(collection(db, "items"));

      return querySnapshot.docs.map((document) => ({
        id: document.id,
        ...document.data(),
      }));
    };
    fireStoreFetch()
      .then((result) =>
        setProductsDetail(result.find((product) => product.id === idItem))
      )
      .catch((error) => console.log(error));
  }, [idItem]);

  return (
    <div className="container px-4 px-lg-5 mt-5">
      <div>
        {productsDetail.length === 0 ? (
          <h1 className="text-center">Cargando ...</h1>
        ) : (
          <ItemDetail
            name={productsDetail.name}
            stock={productsDetail.stock}
            img={productsDetail.img}
            price={productsDetail.price}
            key={productsDetail.id}
            id={productsDetail.id}
          />
        )}
      </div>
    </div>
  );
};

export default ItemDetailContainer;
