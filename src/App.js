import React from 'react';
import './App.css'; // If you have additional custom styles
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
    <Navbar/> 
    <Routes>
    <Route path='/' element={<Home />} />
   </Routes>
<Footer/>
</Router>
    </div>
  );
}

export default App;
