import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { CartContext } from "./CartContext";

function ItemDetail(product) {
  const [itemCount, setItemCount] = useState(0);
  const test = useContext(CartContext);

  const add = (cantidad) => {
    setItemCount(itemCount + cantidad);
    alert("Agregaste " + cantidad + " producto(s) al carrito.");
    test.addToCart(product, cantidad);
  };

  return (
    <div
      className="container px-4 px-lg-1 my-1"
      stock={product.stock}
      key={product.id}
      id={product.id}
    >
      <div className="row gx-4 gx-lg-4 align-items-center">
        <div className="col-md-6">
          <img
            className="card-img-top mb-5 mb-md-0"
            src={product.img}
            alt={product.name}
          />
        </div>
        <div className="col-md-6">
          <div className="small mb-1">SKU: {product.id}</div>
          <h1 className="display-5 fw-bolder">{product.name}</h1>
          <div className="fs-5 mb-5">
            <span>${product.price} </span>
          </div>
          <p className="lead">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            at dolorem quidem modi. Nam sequi consequatur obcaecati excepturi
            alias magni, accusamus eius blanditiis delectus ipsam minima ea iste
            laborum vero?
          </p>
          {itemCount === 0 ? (
            <div className="d-flex">
              <ItemCount onAdd={add} stock={product.stock} initial={1} />
            </div>
          ) : (
            <Link to="/cart">
              {" "}
              <button
                className="btn"
                style={{ backgroundColor: "orchid", color: "white" }}
              >
                Cart
              </button>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
