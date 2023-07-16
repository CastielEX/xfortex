import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Activity from "./pages/Activity";
import Account from "./pages/Account";
import Companies from "./pages/Companies";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Activity" element={<Activity />} />
        <Route path="/Account" element={<Account />} />
        <Route path="/Companies" element={<Companies />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
