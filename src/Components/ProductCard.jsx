import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product }) {
  const [quantity, setQuantity] = useState(1);
  return <article className={styles.card}><img className={styles.image} src={product.image} alt="" /><div className={styles.content}><p className={styles.category}>{product.category}</p><h3>{product.title}</h3><p className={styles.price}>₱{product.price}</p><div className={styles.footer}><div className={styles.quantity} aria-label={`Quantity for ${product.title}`}><button onClick={() => setQuantity((value) => Math.max(1, value - 1))} aria-label="Decrease quantity">−</button><span>{quantity}</span><button onClick={() => setQuantity((value) => value + 1)} aria-label="Increase quantity">+</button></div><Link to={`/products/${product.id}`}>Details <span aria-hidden="true">→</span></Link></div></div></article>;
}
