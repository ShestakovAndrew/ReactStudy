import './App.css';
import Greet from "./components/Greet";

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
    </div>
  );
}

export default App;
