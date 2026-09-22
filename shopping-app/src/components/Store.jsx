import Item from "./Item";
import products from "../data/products";

function Store({ addToCart }) {
  return (
    <div className="store">
      {products.map((product) => (
        <Item key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
}

export default Store;