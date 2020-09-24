import React from 'react';
import Header from "./components/Header/index";
import Navbar from "./components/Navbar/index";
import Searchbar from "./components/Searchbar/index";
import Players from "./components/Card/index";
import Footer from "./components/Footer/index";
import './App.css';

function App() {
  return (
    <div className="App" size="fluid">
      <Header />
      <Navbar />
      <Searchbar />
      <Players />


      <Footer />
    </div>
  );
}

export default App;
