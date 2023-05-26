import './App.css';
import Hero from "./components/Hero";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <div className="App">
        <ErrorBoundary>
            <Hero heroName='Бетмен' />
        </ErrorBoundary>
        <ErrorBoundary>
            <Hero heroName='Супермен' />
        </ErrorBoundary>
        <ErrorBoundary>
            <Hero heroName='Джокер' />
        </ErrorBoundary>
    </div>
  );
}

export default App;
