import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Services from './pages/services'
import Home from "./pages/home";
import About from './pages/about';
import Contact from './pages/contact';

import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
  <Routes>
    <Route exact path="/" element={<Home />}/>
    <Route path="/about" element={<About />} />
    <Route path="/services" element={<Services />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
</Router>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
