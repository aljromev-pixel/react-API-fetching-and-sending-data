import { NavLink } from "react-router-dom";
import logo from "./logo.svg";

export default function Navbar() {
  return <header className="site-header"><nav className="navbar content-wrap" aria-label="Main navigation"><NavLink className="brand" to="/" end><img src={logo} alt="" className="brand-mark" /><span>CCS-112</span></NavLink><NavLink className="nav-link" to="/" end>Catalog</NavLink></nav></header>;
}
