import { useState } from "react";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product }) {
  const [quantity, setQuantity] = useState(1);

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  return (
    <div className={styles.card}>
      <h3>{product.name}</h3>

      <p>₱{product.price}</p>

      <div className={styles.quantity}>
        <button onClick={decreaseQuantity}>−</button>

        <span>{quantity}</span>

        <button onClick={increaseQuantity}>+</button>
      </div>
    </div>
  );
}