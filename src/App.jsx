import "./App.css";
import MyFooter from "./Components/MyFooter";
import MyHome from "./Components/MyHome";
import MyNav from "./Components/MyNav";
import Gallery from "./Components/Gallery";

function App() {
  return (
    <div className="App">
      <MyNav />
      <MyHome />
      <div>
        <h2>Trending Now</h2>
        <Gallery searchQuery="Harry Potter" />
      </div>

      <MyFooter />
    </div>
  );
}

export default App;
