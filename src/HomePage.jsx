import { useMemo, useState } from "react";
import ProductCard from "./Components/ProductCard";
import { products } from "./data/products";

export default function HomePage() {
  const [search, setSearch] = useState("");
  const filteredProducts = useMemo(() => products.filter((product) => `${product.title} ${product.category}`.toLowerCase().includes(search.toLowerCase())), [search]);

  return (
    <>
      <section className="catalog-hero" aria-labelledby="catalog-title"><div className="content-wrap hero-content"><p className="eyebrow">CCS-112 · Gaming gear</p><h1 id="catalog-title">Build your setup<br /><span>for the next level.</span></h1><p>Curated performance gear for focused workdays, late-night queues, and every game in between.</p><a className="hero-button" href="#products">Browse the collection <span aria-hidden="true">↓</span></a></div></section>
      <section className="catalog-section content-wrap" id="products" aria-labelledby="products-title"><div className="section-heading"><div><p className="eyebrow">Featured drops</p><h2 id="products-title">Gear worth playing with.</h2></div><label className="search-box"><span className="sr-only">Search gaming products</span><input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search gear" /></label></div><div className="product-grid">{filteredProducts.length ? filteredProducts.map((product) => <ProductCard key={product.id} product={product} />) : <p className="status-message">No gear matches that search.</p>}</div></section>
    </>
  );
}
