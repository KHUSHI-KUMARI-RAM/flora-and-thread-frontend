import { useParams } from "react-router-dom";
import products from "../data/products";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
    return <h2>Product not found</h2>;
  }

  return (
    <main className="product-details">
      <div className="details-image">
        <img
          src={product.image}
          alt={product.name}
        />
      </div>

      <div className="details-info">
        <span className="category">
          {product.category}
        </span>

        <h1>{product.name}</h1>

        <div className="details-rating">
          ⭐ {product.rating}
        </div>

        <h2>₹{product.price}</h2>

        <p>
          Discover this amazing product from SmartCart.
          High quality, stylish and perfect for everyday use.
        </p>

        <button className="add-cart-button">
          Add to Cart
        </button>
      </div>
    </main>
  );
}

export default ProductDetails;