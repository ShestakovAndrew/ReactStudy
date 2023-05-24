import './App.css';
import Greet from "./components/Greet";
import Welcome from "./components/Welcome";

function App() {
  return (
    <div className="App">
      <Greet name="Андрей" heroName="Супермен">
          <p>Это детский параметр</p>
      </Greet>
      <Greet name="Таня" heroName="Супер-Женщина">
          <button>Действие</button>
      </Greet>
      <Greet name="Рома" heroName="Бетмен"/>

      <Welcome name="Андрей" heroName="Супермен"></Welcome>
      <Welcome name="Таня" heroName="Супер-Женщина"></Welcome>
      <Welcome name="Рома" heroName="Бетмен"></Welcome>
    </div>
  );
}

export default App;
