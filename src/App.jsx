import { Route, Routes } from "react-router-dom";
import Footer from "./Footer";
import HomePage from "./HomePage";
import Navbar from "./Navbar";
import ProductDetail from "./Components/ProductDetail";
import "./App.css";

export default function App() {
  return <div className="app-shell"><Navbar /><main className="site-main"><Routes><Route path="/" element={<HomePage />} /><Route path="/products/:id" element={<ProductDetail />} /><Route path="*" element={<HomePage />} /></Routes></main><Footer /></div>;
}
