import React from "react";
import Answer from "./Components/Answer/Answer";
import Bottom from "./Components/Bottom/Bottom";
import Carusel from "./Components/Carusel/Carusel";
import Center from "./Components/Center/Center";
import George from "./Components/George/George";
import Platform from "./Components/Platform/Platform";
import Video from "./Components/Video/Video";
import Work from "./Components/Work/Work";
import Footer from "./pages/Footer/Footer";
import Header from "./pages/Header/Header";
import Nav from "./pages/Nav/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Carusel />
      <Center />
      <Work />
      <George />
      <Video />
      <Answer />
      <Platform />
      <Bottom />
      <Footer />
    </div>
  );
}

export default App;
