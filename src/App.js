// src/App.js
import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import { AppProvider } from "./context";

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="App">
          <header className="App-header">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container">
                <Link className="navbar-brand" to="/">
                  Home
                </Link>
                <Link className="navbar-brand" to="/about">
                  About
                </Link>
              </div>
            </nav>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </header>
        </div>
      </Router>
    </AppProvider>
  );
}

export default App;
