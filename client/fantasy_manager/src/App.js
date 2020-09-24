import React from 'react';
import Header from "./components/Header/index";
import Navbar from "./components/Navbar/index";
import Searchbar from "./components/Searchbar/index";
import Footer from "./components/Footer/index";
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Searchbar />



      <Footer />
    </div>
  );
}

export default App;
