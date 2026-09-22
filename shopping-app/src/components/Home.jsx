import Store from "./Store";

function Home({ cart, addToCart }) {
  return (
    <div className="home">
      <h2>OUR PRODUCTS</h2>
      <Store cart={cart} addToCart={addToCart} />
    </div>
  );
}

export default Home;
