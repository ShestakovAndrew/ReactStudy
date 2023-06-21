type TodoItemData = {
    id: string,
    title: string,
    description: string,
    priority: TodoPriority
}

enum TodoPriority {
    Low = 0,
    Medium = 1,
    High = 2
}

export {
    TodoPriority,
}

export type {
    TodoItemData
}
