import React from "react";
import "./App.scss";
import { Navbar, NavDots, SocialMedia } from "./components";
import { Header, About, Skills, Works, Footer } from "./container";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Works />
      <Skills />
      <Footer />
      <SocialMedia />
      {/* <NavDots active={inView} /> */}
    </div>
  );
}

export default App;
