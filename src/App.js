import './App.css';
import About from './components/About/About';
import What from './components/What/What';
import Why from './components/Why/Why';
import Team from './components/Team/Team';
import Reach from './components/Reach/Reach';
import Footer from './components/Footer/Footer';
import Examples from './components/Examples/Examples';


function App() {
  return (
    <div className='app'>
      <About/>
      <What/>
      <Examples/>
      <Why/>
      <Team/>
      <Reach/>
      <Footer/>
    </div>
  );
}

export default App;
