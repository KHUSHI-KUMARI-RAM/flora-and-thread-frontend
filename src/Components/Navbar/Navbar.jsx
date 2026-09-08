import "./Navbar.css";

function Navbar({
  cartCount = 0,
  wishlistCount = 0,
  onHomeClick = () => {},
  onCartClick,
  onWishlistClick = () => {},
  onProductsClick = () => {},
  onDealsClick = () => {},
  onOrdersClick = () => {},
  onProfileClick = () => {},
  onSearchChange = () => {}
}) {
  return (
    <nav
      className="navbar"
      style={{
        backgroundColor: "#DDEEDC"
      }}
    >
      <div
        className="logo"
        style={{
          color: "#C97C9D",
          fontFamily: "'Brush Script MT', 'Segoe Script', cursive"
        }}
      >
        🛒 <span>Flora & Thread</span>
      </div>

      <div className="nav-links">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            onHomeClick();
          }}
        >
          🏠 Home
        </a>

        <button
          onClick={onProductsClick}
          style={{
            background: "transparent",
            color: "#000000",
            border: "none"
          }}
        >
          🛍️ Products
        </button>

        <a
          href="/deals"
          onClick={(e) => {
            e.preventDefault();
            onDealsClick();
          }}
          style={{
            color: "#000000"
          }}
        >
          🔥 Deals
        </a>

        <button
          onClick={onOrdersClick}
          style={{
            background: "transparent",
            color: "#000000",
            border: "none"
          }}
        >
          📦 Orders
        </button>
      </div>

      <div className="nav-actions">
        <div className="search-container">
          <input
            type="text"
            placeholder="Search products..."
            onChange={(e) => onSearchChange(e.target.value)}
          />

          <span className="search-icon">🔍</span>
        </div>

        <button
          onClick={onWishlistClick}
          style={{
            color: "#000000"
          }}
        >
          <span style={{ color: "#F3CEEE", fontSize: "20px" }}>♥</span>{" "}
          Wishlist {wishlistCount > 0 && `(${wishlistCount})`}
        </button>

        <button
          onClick={onCartClick}
          style={{
            color: "#000000"
          }}
        >
          🛒 Cart {cartCount > 0 && `(${cartCount})`}
        </button>

        <button
          onClick={onProfileClick}
          style={{
            color: "#000000"
          }}
        >
          👤 Profile
        </button>
      </div>
    </nav>
  );
}

export default Navbar;