import './App.css';
import ClickCounterTwo from "./components/ClickCounterTwo";
import HoverCounterTwo from "./components/HoverCounterTwo";
import Counter37 from "./components/Counter37";

function App() {
  return (
    <div className="App">
        <Counter37>
            {(count, incrementCount) => (
                <ClickCounterTwo count={count} incrementCount={incrementCount} />
            )}
        </Counter37>

        <Counter37>
            {(count, incrementCount) => (
                <HoverCounterTwo count={count} incrementCount={incrementCount} />
            )}
        </Counter37>
    </div>
  );
}

export default App;
