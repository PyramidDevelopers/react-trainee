import './App.css';
import About from './components/About/About';
import What from './components/What/What';
import Why from './components/Why/Why';
import Team from './components/Team/Team';
import Reach from './components/Reach/Reach';

function App() {
  return (
    <div className='app'>
      <About/>
      <What/>
      <Why/>
      <Team/>
      <Reach/>
    </div>
  );
}

export default App;
