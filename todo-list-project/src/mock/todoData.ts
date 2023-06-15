import {TodoElementType, TodoPriorityEnum} from "./todo.types";

export const todoList: TodoElementType[] = [
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