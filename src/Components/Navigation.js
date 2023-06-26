//write a navigation file for home, about, contact pages
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import "../Assets/Navigation.scss"
function Navigation() {
	return (
		<Router>
			<div className="logo">Movie App</div>
			<nav>
				<Link to="/">Home</Link>
				<Link to="/about">About</Link>
				<Link to="/contact">Contact</Link>
      </nav>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/about" element={<About />} />
				<Route exact path="/contact" element={<Contact />} />
			</Routes>
		</Router>
	);
}

export default Navigation;
