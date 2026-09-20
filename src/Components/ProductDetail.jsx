import React from "react";
import { Link, useParams } from "react-router-dom";

function ProductDetail() {
  const { id } = useParams();

  const products = [
    {
      id: 1,
      name: "React Wireless Mouse",
      price: 1299,
      description: "A reliable wireless mouse for everyday computer use.",
    },
    {
      id: 2,
      name: "React 60HE Mechanical Keyboard",
      price: 1599,
      description: "A responsive mechanical keyboard designed for comfortable typing.",
    },
    {
      id: 3,
      name: "Ethernet Cable Cat6 ver",
      price: 549,
      description: "A Cat6 Ethernet cable for fast and reliable network connections.",
    },
  ];

  const product = products.find(
    (product) => product.id === Number(id)
  );

  if (!product) {
    return (
      <main>
        <h2>Product not found</h2>
        <Link to="/">Back to Home</Link>
      </main>
    );
  }

  return (
    <main className="product-detail">
      <h1>{product.name}</h1>

      <p>Price: ₱{product.price}</p>

      <p>{product.description}</p>

      <Link to="/">← Back to Products</Link>
    </main>
  );
}

export default ProductDetail;