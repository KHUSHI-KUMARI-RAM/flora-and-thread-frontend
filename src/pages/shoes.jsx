import shoes from "../data/shoes.js";
import "./shoes.css";

function Shoes() {
  return (
    <main className="shoes-page">
      <h1>Running Shoes</h1>

      <p className="shoes-subtitle">
        Choose your perfect pair
      </p>

      <div className="shoes-grid">
        {shoes.map((shoe) => (
          <div className="shoe-card" key={shoe.id}>
            
            <div className="shoe-image">
              <img
                src={shoe.image}
                alt={shoe.name}
              />
            </div>

            <div className="shoe-info">
              <span className="shoe-brand">
                {shoe.brand}
              </span>

              <h2>{shoe.name}</h2>

              <div className="shoe-rating">
                ⭐ {shoe.rating}
              </div>

              <div className="shoe-bottom">
                <strong>₹{shoe.price}</strong>

                <button>
                  Add to Cart
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>
    </main>
  );
}

export default Shoes;