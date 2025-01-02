import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Features from "./components/Features";


import Footer from "./components/Footer";
import './App.css'
import Navbar from "./components/Navbar";
import BannerWithPagination from "./components/BannerWithPagination";
import TravelBag from "./components/TravelBag";
import StoreLocator from "./components/StoreLocator";
import Thanks from "./components/Thanks";

function App() {
  return (
    <div className="font-sans">
      <Header />
      <Navbar></Navbar>
      <BannerWithPagination></BannerWithPagination>
      <Hero />
      <Features />
      <TravelBag></TravelBag>
   
      {/* <ExploreSection /> */}
      <StoreLocator></StoreLocator>
      <Thanks></Thanks>
      <Footer />
    </div>
  );
}

export default App;
