import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./component/header/header";
import Footer from "./component/footer/footer";
import Home from "./Pages/home/home.js";
import Portfolio from "./Pages/portfolio/portfolio";
import Aboutme from "./Pages/contactme/contactme";

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />}></Route>
        <Route exact path="/portfolio" element={<Portfolio />}></Route>
        <Route exact path="/aboutme" element={<Aboutme />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
