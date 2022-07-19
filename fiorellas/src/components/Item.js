import { Link } from "react-router-dom";

function Item({ name, img, price, id }) {
  return (
    <Link to={`/item/${id}`} style={{ textDecoration: "none", color: "black" }}>
      <div className="col mb-4 mx-auto" style={{ width: "15rem" }}>
        <div className="card mx-auto" key={id}>
          <img className="card-img-top" src={img} alt={name} />
          <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">${price}</p>
            <button
              className="btn justify-content-center"
              style={{ backgroundColor: "orchid", color: "white" }}
            >
              Shop
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Item;
