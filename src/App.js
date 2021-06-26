import './App.css';
import { OurTeam } from './components/our team/OurTeam';
import { Who } from './components/who/Who'
import { What } from './components/what/What';

function App() {
  return (
    <div className="main-app">
      <Who />
      <What />
      <OurTeam />
    </div>
  );
}

export default App;
