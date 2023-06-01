import './App.css';
import {Greet} from "./components/Greet";
import {Person} from "./components/Person";
import {PersonList} from "./components/PersonList";

function App() {
    const personName = {
        first: 'Андрей',
        last: 'Шестаков'
    }

    const personList = [
        {
            first: 'Андрей',
            last: 'Шестаков'
        },
        {
            first: 'Татьяна',
            last: 'Романова'
        },
        {
            first: 'Роман',
            last: 'Мухлыгин'
        }
    ]


    return (
    <div className="App">
      <Greet name='Андрей' messageCount={5} isLoggedIn={true}/>
      <Person name={personName} />
        <PersonList names={personList} />
    </div>
    )
}

export default App;
