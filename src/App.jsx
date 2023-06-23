import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Content from "./components/Content";
import Reservation from "./components/Reservation";
import Team from "./components/Team";
import NewsLetter from "./components/NewsLetter";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <Team />
      <Content />
      <Reservation />
      <NewsLetter />
      <Footer />
    </>
  );
}

export default App;
