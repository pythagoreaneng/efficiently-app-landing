import './App.css';
import { Switch, Route } from 'react-router-dom';
import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbar';
import Home from './pages';
import Footer from './components/Footer';




function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
      </Switch>
      <Footer />
    </>
  );
}

export default App;
