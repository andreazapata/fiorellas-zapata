import Item from "./Item.js";

function ItemList({ product }) {
  return product.map(({ name, stock, price, img, id }) => {
    return (
      <Item
        name={name}
        stock={stock}
        price={price}
        img={img}
        key={id}
        id={id}
      />
    );
  });
}

export default ItemList;
