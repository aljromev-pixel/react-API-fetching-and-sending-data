import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

export default function ProductDetail() {
  const { id } = useParams(); const [product, setProduct] = useState(null); const [error, setError] = useState("");
  useEffect(() => { fetch(`https://fakestoreapi.com/products/${id}`).then((response) => { if (!response.ok) throw new Error(); return response.json(); }).then(setProduct).catch(() => setError("Product not found.")); }, [id]);
  if (error) return <section className="detail-page content-wrap"><h1>{error}</h1><Link to="/">← Back to catalog</Link></section>;
  if (!product) return <p className="status-message content-wrap">Loading product...</p>;
  return <section className="detail-page content-wrap"><Link className="back-link" to="/">← Back to catalog</Link><div className="detail-card"><div className="detail-image"><img src={product.image} alt={product.title} /></div><div><p className="eyebrow">{product.category}</p><h1>{product.title}</h1><p className="detail-price">₱{product.price}</p><p className="detail-description">{product.description}</p></div></div></section>;
}
