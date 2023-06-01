import './App.css';
import {Status} from "./components/Status";
import {Button} from "./components/Button";
import {Input} from "./components/Input";

function App() {
    return (
    <div className="App">
      <Status status='success' />
        <Button handleClick={(event, id) => {
            console.log('Button clicked', event, id)
        }}
        />
        <Input value='' handleChange={event => console.log(event)} />
    </div>
    )
}

export default App;
