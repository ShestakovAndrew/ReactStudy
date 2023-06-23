import {TodoItemData, TodoPriority} from "../pages/todoList/model/todo.types"

const todoList: TodoItemData[] = [
    {
        id: '0',
        title: 'Проснуться',
        description: '',
        priority: TodoPriority.Low
    },
    {
        id: '1',
        title: 'Встать',
        description: 'Хорошо бы до 12 дня',
        priority: TodoPriority.Low
    },
    {
        id: '2',
        title: 'Покушать',
        description: 'пресс-пицца мясной бум конечно',
        priority: TodoPriority.High
    },
    {
        id: '3',
        title: 'Почистить зубы',
        description: 'утром и вечером',
        priority: TodoPriority.Low
    },
    {
        id: '4',
        title: 'Погулять',
        description: 'негде гулять особо',
        priority: TodoPriority.Low
    },
    {
        id: '5',
        title: 'Поиграть в minecraft',
        description: 'ежедневная доза',
        priority: TodoPriority.High
    },
    {
        id: '6',
        title: 'Покататься на самокате',
        description: 'до Yolka в кино и обратно',
        priority: TodoPriority.Medium
    }
]

export {
    todoList
}