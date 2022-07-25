import { useContext } from "react";
import { CartContext } from "./CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const test = useContext(CartContext);

  return (
    <>
      <div className="p-4 mt-4 mt-lg-0 rounded">
        <h4 className="header-title mb-3">Carrito de compras</h4>
        {test.cartList.length === 0 ? (
          <>
            <div className="text-center mt-5">
              <h4 className="header-title">No hay nada en tu carrito.</h4>
              <img
                alt="img"
                src="https://www.letrasrecortadas.com/carritoVacio.png"
                style={{ maxWidth: 200 }}
              ></img>
              <br />
              <Link to="/" style={{ textDecoration: "none" }}>
                {" "}
                Volver a Inicio
              </Link>
            </div>
          </>
        ) : (
          <div className="table-responsive border">
            <table className="table table-nowrap table-centered mb-0">
              <tbody>
                {test.cartList.length > 0 &&
                  test.cartList.map((item) => (
                    <tr key={item.id}>
                      <td>
                        <Link to={`/item/${item.id}`}>
                          <img
                            src={item.img}
                            alt={item.name}
                            className="rounded me-4"
                            style={{ height: 200 }}
                          />
                        </Link>
                        <div className="m-0 d-inline-block align-middle">
                          <small className="text-body fw-semibold">
                            {item.name}
                          </small>
                          <br />
                          <small>Cantidad: {item.qty} </small>
                          <br />
                          <small>Precio: ${item.price} c/u</small>
                        </div>
                      </td>
                      <td className="text-middle align-middle">
                        ${item.price * item.qty}
                      </td>
                      <td className="align-middle">
                        <button
                          onClick={() => test.deleteItem(item.id)}
                          sx={{ fontSize: 45 }}
                        >
                          Eliminar
                        </button>
                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
            <div className="text-end p-2">
              <div>
                <h5>Total:</h5>
              </div>
              <div className="text-end fw-bold">${test.total}</div>
            </div>
          </div>
        )}
        {test.cartList.length === 0 ? (
          <></>
        ) : (
          <>
            <button
              className="btn bg-dark m-2"
              style={{ color: "white" }}
              onClick={() => test.removeList()}
            >
              Borrar todo
            </button>
            <div className="row mt-4">
              <div className="col-sm-6">
                <Link
                  to="/"
                  className="btn text-muted d-none d-sm-inline-block btn-link fw-semibold mdi mdi-arrow-left"
                >
                  {" "}
                  Continua comprando{" "}
                </Link>
              </div>
              <div className="col-sm-6">
                <div className="text-sm-end">
                  <button
                    className="mdi mdi-cart-plus m-2 btn btn-danger"
                    onClick={() => alert("compra finalizada")}
                  >
                    Comprar
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default Cart;
