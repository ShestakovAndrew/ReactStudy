type TodoItemData = {
    id: string,
    title: string,
    description: string,
    priority: TodoPriority
}

enum TodoPriority {
    Low = 'Низкий',
    Medium = 'Средний',
    High = 'Высокий'
}

export {
    TodoPriority,
}

export type {
    TodoItemData
}
