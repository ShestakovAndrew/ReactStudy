import './App.css';
import {CustomComponent} from "./components/html/CustomComponent";

function App() {
    return (
    <div className="App">
        <CustomComponent name='Андрей' isLoggedIn/>
    </div>
    )
}

export default App;
