import {useAppSelector} from "../../redux/hooks"

export const ViewTodoList = () => {
    const todoList = useAppSelector((state) => state.todoList)

    return (
        <div>
            <h2>Список дел</h2>
            <table className='todoTable'>
                <thead>
                <tr>
                    <th>Название</th>
                    <th>Описание</th>
                    <th>Приоритет</th>
                </tr>
                </thead>
                <tbody>
                    {todoList.map(todoElement => (
                        <tr key={todoElement.id}>
                            <td>{todoElement.title}</td>
                            <td>{todoElement.description}</td>
                            <td>{todoElement.priority}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}