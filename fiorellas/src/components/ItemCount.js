import React, { useState } from "react";

function ItemCount({ stock, initial, onAdd }) {
  const [cantidad, setCantidad] = useState(parseInt(initial));

  const plus = () => {
    if (cantidad < stock) {
      setCantidad(cantidad + 1);
    }
  };

  const minus = () => {
    if (cantidad > initial) {
      setCantidad(cantidad - 1);
    }
  };

  return (
    <div className="d-flex">
      <button className="btn btn-primary" onClick={minus}>
        -
      </button>

      <p className="m-4">{cantidad}</p>
      <button className="btn btn-primary" onClick={plus}>
        +
      </button>
      <button className="btn btn-danger ms-2" onClick={() => onAdd(cantidad)}>
        Agregar a carrito
      </button>
    </div>
  );
}

export default ItemCount;
