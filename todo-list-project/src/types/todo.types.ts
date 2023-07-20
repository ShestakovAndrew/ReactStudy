type TodoItemProps = {
    title: string,
    description: string,
    priority: TodoPriority
}

type TodoItemModel = {
    id: string,
} & TodoItemProps

enum TodoPriority {
    Low ,
    Medium,
    High
}

const priorityEnumToString = (priority: TodoPriority) => {
    switch (priority) {
        case TodoPriority.High: return "Высокий"
        case TodoPriority.Medium: return "Средний"
        case TodoPriority.Low: return "Низкий"
    }
}

export {
    TodoPriority,
    priorityEnumToString
}

export type {
    TodoItemProps,
    TodoItemModel,
}
