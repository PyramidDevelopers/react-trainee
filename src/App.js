import './App.css';
import { OurTeam } from './components/our team/OurTeam';
import { Who } from './components/who/Who'
import { What } from './components/what/What';
import { Why } from './components/why/Why';
import { ReachUs } from './components/reach us/ReachUs';
import { Footer } from './components/footer/Footer';

function App() {
  return (
    <div className="main-app">
      <Who />
      <What />
      <Why />
      <OurTeam />
      <ReachUs />
      <Footer />
    </div>
  );
}

export default App;
