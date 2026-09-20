import { useState } from "react";
import { Link } from "react-router-dom";
import { formatPeso } from "../data/products";
import styles from "./ProductCard.module.css";

export default function ProductCard({ product }) {
  const [quantity, setQuantity] = useState(1);
  return <article className={styles.card}><div className={`${styles.visual} ${styles[product.accent]}`} aria-hidden="true"><span>{product.icon}</span></div><div className={styles.content}><p className={styles.category}>{product.category}</p><h3>{product.title}</h3><p className={styles.price}>{formatPeso(product.price)}</p><div className={styles.footer}><div className={styles.quantity} aria-label={`Quantity for ${product.title}`}><button onClick={() => setQuantity((value) => Math.max(1, value - 1))} aria-label="Decrease quantity">−</button><span>{quantity}</span><button onClick={() => setQuantity((value) => value + 1)} aria-label="Increase quantity">+</button></div><Link to={`/products/${product.id}`}>Details <span aria-hidden="true">→</span></Link></div></div></article>;
}
