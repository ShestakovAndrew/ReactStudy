import './App.css';
import {Status} from "./components/Status";
import {Heading} from "./components/Heading";
import {Oscar} from "./components/Oscar";
import {Greet} from "./components/Greet";

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
      <Status status='success' />
        <Heading>Placeholder text</Heading>
        <Oscar>
            <Heading>Oscar goes to Leonardo Dicaprio!</Heading>
        </Oscar>
        <Greet name='Андрей' isLoggedIn={false}/>
    </div>
    )
}

export default App;
