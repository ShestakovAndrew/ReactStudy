import {createSlice} from '@reduxjs/toolkit'
import {TodoElementType, TodoPriorityEnum} from "./todoSlice.types";

type InitialStateType = {
    todoList: TodoElementType[]
}

const initialState: InitialStateType = {
    todoList: [
        {
            id: '0',
            title: 'Проснуться',
            description: "",
            priority: TodoPriorityEnum.Low
        },
        {
            id: "1",
            title: "Встать",
            description: "Хорошо бы до 12 дня",
            priority: TodoPriorityEnum.Low
        },
        {
            id: "2",
            title: "Покушать",
            description: "пресс-пицца мясной бум конечно",
            priority: TodoPriorityEnum.High
        },
        {
            id: "3",
            title: "Почистить зубы",
            description: "утром и вечером",
            priority: TodoPriorityEnum.Low
        },
        {
            id: "4",
            title: "Погулять",
            description: "негде гулять особо",
            priority: TodoPriorityEnum.Low
        },
        {
            id: "5",
            title: "Поиграть в minecraft",
            description: "ежедневная доза",
            priority: TodoPriorityEnum.High
        },
        {
            id: "6",
            title: "Покататься на самокате",
            description: "до yolka в кино и обратно",
            priority: TodoPriorityEnum.Medium
        }
    ]
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        add: (state, action) => {
            //add new element
        }
    }
})

export default todoSlice.reducer
export const {add} = todoSlice.actions