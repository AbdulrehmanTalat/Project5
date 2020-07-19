import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navbar';
import Header from './components/header/Header';
import Secure from './components/secure/Secure';
import Community from './components/comunity/Comunity';
import Build from './components/build/Build';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
    <Navbar />
    <Header />
    <Secure />
    <Community />
    <Build />
    <Footer />
    </div>
  );
}

export default App;
