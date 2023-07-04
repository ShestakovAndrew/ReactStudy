type TodoItemProps = {
    title: string,
    description: string,
    priority: TodoPriority
}

type TodoItemData = {
    id: string,
} & TodoItemProps

enum TodoPriority {
    Low = 'Низкий',
    Medium = 'Средний',
    High = 'Высокий'
}

export {
    TodoPriority,
}

export type {
    TodoItemProps,
    TodoItemData,
}
