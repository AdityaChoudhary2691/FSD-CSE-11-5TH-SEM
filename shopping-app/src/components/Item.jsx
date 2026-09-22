function Item({ product, addToCart }) {
  return (
    <div className="item">
      <p className="item-note">{product.note}</p>
      <p className="item-price">₹{product.price}</p>
      <button onClick={() => addToCart(product)}>ADD TO CART</button>
    </div>
  );
}

export default Item;
