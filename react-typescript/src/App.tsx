import './App.css';
import {List} from "./components/generics/List";

function App() {
    return (
    <div className="App">
        {/*<List items={['Бэтмен', 'Супермен', 'Чудо-Женщина']}
              onClick={(item) => console.log(item)}
        />
        <List items={[0, 1, 2]} onClick={(item) => console.log(item)}/>*/}
        <List items={[
            {
                  id: 1,
                  first: 'Андрей',
                  last: 'Шестаков',
            },
            {
                id: 2,
                first: 'Роман',
                last: 'Мухлыгин',
            },
            {
                id: 3,
                first: 'Татьяна',
                last: 'Романова',
            },
        ]} onClick={(item) => console.log(item)}/>
    </div>
    )
}

export default App;
