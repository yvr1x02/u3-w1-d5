import React, { useState } from "react";
import "./App.css";
import MyCarousel from "./Components/MyCarousel";
import FilmGrid from "./Components/FilmGrid";
import MyFooter from "./Components/MyFooter";
import MyHome from "./Components/MyHome";
import MyNav from "./Components/MyNav";

function App() {
  const [filmNames] = useState(["Harry Potter", "Avengers", "Star Wars"]);

  return (
    <div className="App">
      <MyNav />
      <MyHome />
      {filmNames.map((filmName, index) => (
        <MyCarousel key={index} mainTitle={`Film di ${filmName}`}>
          <FilmGrid filmName={filmName} />
        </MyCarousel>
      ))}
      <MyFooter />
    </div>
  );
}

export default App;
