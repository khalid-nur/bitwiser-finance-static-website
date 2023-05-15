import React from "react";
import NavBar from "./Components/NavBar";
import Hero from "./Components/Hero";
import FeaturedIn from "./Components/FeaturedIn";
import Analytics from "./Components/Analytics";
import NewsLetter from "./Components/NewsLetter";
import Card from "./Components/Card";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <FeaturedIn />
      <Analytics />
      <NewsLetter />
      <Card />
      <Footer />
    </div>
  );
};

export default App;
