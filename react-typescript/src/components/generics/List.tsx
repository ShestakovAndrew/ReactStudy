type ListProps<T> = {
    items: T[]
    onClick: (value: T) => void
}

export const List = <T extends { id: number }>({
   items,
   onClick
}: ListProps<T>) => {
    return (
        <div>
            <h2>List of items</h2>
            {items.map((item) => {
                let value = Object.values(item)
                return (
                    <div key={item.id} onClick={() => onClick(item)}>
                        {value[1]} {value[2]}
                    </div>
                )
            })}
        </div>
    )
}
