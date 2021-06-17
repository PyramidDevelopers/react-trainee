import "./App.css";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import What from "./components/What/What";
import ShowcaseWork from "./components/ShowcaseWork/ShowcaseWork";

function App() {
  return (
    <div className="app">
      <Header />
      <About />
      <What />
      <ShowcaseWork />
    </div>
  );
}

export default App;
