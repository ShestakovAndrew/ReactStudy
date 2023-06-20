export type TodoItemType = {
    id: string,
    title: string,
    description: string,
    priority: TodoPriority
}

export enum TodoPriority {
    Low = 0,
    Medium = 1,
    High = 2
}