export type TodoElementType = {
    id: string,
    title: string,
    description: string,
    priority: TodoPriorityEnum
}

export enum TodoPriorityEnum {
    Low = 0,
    Medium = 1,
    High = 2
}