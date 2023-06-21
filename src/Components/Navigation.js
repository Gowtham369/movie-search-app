//write a navigation file for home, about, contact pages
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";
import {Nav, Logo, List, ListItem, Li} from "../Assets/Navigation.js"
function Navigation() {
	return (
		<Router>
			<nav $primary><div className="logo">Movie App</div>
			<div>
				<Link to="/">Home</Link>
			</div>
			<div>
				<Link to="/about">About</Link>
			</div>
			<div>
				<Link to="/contact">Contact</Link>
			</div>
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
