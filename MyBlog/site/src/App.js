import { useEffect, useState } from "react";
import './App.css';
import Navbar from './Components/Navbar'
import axios from 'axios';
import { Routes, Route, Link } from "react-router-dom";
import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import Wrapper from "./Components/Wrapper";
import Responsive from "./Components/Responsive";
import Popular from "./Components/Popular";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Hero />
      <Wrapper />
      <Responsive />
      <Popular />



    </div>
  );
}

export default App;
