import './App.css';
import Assign from './components/Assign';
import NavBar from './components/NavBar';
import Timeline from './components/Timeline';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Timeline visibility={false} value={"Flower Arrangement"} color={"text-red-600"} size={"text-2xl"} />
      <Timeline visibility={true} value={"Dec 5, 2024 at 8:00-10:00 AM"} size={"text-base"}/>
      <Assign/>
    </div>
  );
}

export default App;
