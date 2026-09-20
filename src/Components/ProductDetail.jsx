import { Link, useParams } from "react-router-dom";
import { findProduct, formatPeso } from "../data/products";

export default function ProductDetail() {
  const product = findProduct(useParams().id);
  if (!product) return <section className="detail-page content-wrap"><h1>Gear not found.</h1><Link className="back-link" to="/">← Back to catalog</Link></section>;
  return <section className="detail-page content-wrap"><Link className="back-link" to="/">← Back to catalog</Link><div className="detail-card"><div className={`detail-visual ${product.accent}`} aria-hidden="true">{product.icon}</div><div><p className="eyebrow">{product.category}</p><h1>{product.title}</h1><p className="detail-price">{formatPeso(product.price)}</p><p className="detail-description">{product.description}</p><span className="price-note">Estimated Philippine retail price</span></div></div></section>;
}
