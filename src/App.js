import "./App.css";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import What from "./components/What/What";
import ShowcaseWork from "./components/ShowcaseWork/ShowcaseWork";
import Why from "./components/Why/Why";
import Team from "./components/Team/Team";

function App() {
  return (
    <div className="app">
      <Header />
      <About />
      <What />
      <ShowcaseWork />
      <Why />
      <Team />
    </div>
  );
}

export default App;
