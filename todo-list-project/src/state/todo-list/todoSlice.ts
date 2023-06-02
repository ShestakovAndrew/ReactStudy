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
            description: "",
            priority: TodoPriorityEnum.Low
        },
        {
            id: "2",
            title: "Покушать",
            description: "",
            priority: TodoPriorityEnum.Low
        },
        {
            id: "3",
            title: "Почистить зубы",
            description: "",
            priority: TodoPriorityEnum.Low
        },
        {
            id: "4",
            title: "Погулять",
            description: "",
            priority: TodoPriorityEnum.Low
        },
        {
            id: "5",
            title: "Поиграть в minecraft",
            description: "",
            priority: TodoPriorityEnum.High
        },
        {
            id: "6",
            title: "Покататься на самокате",
            description: "",
            priority: TodoPriorityEnum.Medium
        }
    ]
}

const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        add: (state, action) => {

        }
    }
})

export default todoSlice.reducer
export const {add} = todoSlice.actions