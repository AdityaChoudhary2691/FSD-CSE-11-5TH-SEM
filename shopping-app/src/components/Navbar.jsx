function Navbar({ cartCount }) {
  return (
    <div className="navbar">
      <a href="#">HOME</a>
      <a href="#">MY CART ({cartCount})</a>
      <a href="#">MY ORDERS</a>
      <a href="#">SETTINGS</a>
      <a href="#">LOGOUT</a>
    </div>
  );
}

export default Navbar;