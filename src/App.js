import './App.css';
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <Greet name='Андрей' heroName='Супермен'/>
      <Welcome name='Андрей' heroName='Супермен'/>
    </div>
  );
}

export default App;
