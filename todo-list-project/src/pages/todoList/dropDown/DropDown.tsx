import {useEffect, useRef, useState} from "react"
import {priorityEnumToString, TodoPriority} from "../../../types/todo.types"
import {changePriorityAction} from "../../../store/todoList/priority.slice"
import {useAppDispatch} from "../../../hooks/baseHooks"
import {useTodoPrioritySelector} from "../../../hooks/useTodoPrioritySelector"

import styles from "./DropDown.module.css"

type DropDownProps = {
    todoPriority: TodoPriority,
    setTodoPriority: (value: (((prevState: TodoPriority) => TodoPriority) | TodoPriority)) => void,
    isChangeStoreTodoPriority?: boolean,
}

const DropDown = ({todoPriority, setTodoPriority, isChangeStoreTodoPriority = false}: DropDownProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const priorityDropDownRef = useRef<HTMLDivElement>(null)

    const dispatch = useAppDispatch()
    const todoPriorityFromStore = useTodoPrioritySelector()

    const handleToggleShow = () => {
        setIsOpen((prevState: boolean) => !prevState)
    }

    const handleSetPriority = (priority: TodoPriority) => {
        if (isChangeStoreTodoPriority)
        {
            dispatch(changePriorityAction(priority))
        }

        setTodoPriority(priority)
        setIsOpen(false)
    }

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (priorityDropDownRef.current) {
                const elementClick: Node = event.target as Node
                const isDropDownClick: boolean = priorityDropDownRef.current.contains(elementClick)

                if (!isDropDownClick) {
                    setIsOpen(false)
                }
            }
        }

        document.addEventListener('mousedown', handleOutsideClick)

        return () => {
            document.removeEventListener("mousedown", handleOutsideClick)
        }
    }, [])

    return (
        <div ref={priorityDropDownRef}>
            <button type="button" className={styles.dropdownToggle} onClick={handleToggleShow}>
                {
                    priorityEnumToString(isChangeStoreTodoPriority ? todoPriorityFromStore : todoPriority)
                }
            </button>
            {isOpen && (
                <div className={styles.dropdownMenu}>
                    <button className={styles.dropdownItem} onClick={() => handleSetPriority(TodoPriority.High)}>Высокий</button>
                    <button className={styles.dropdownItem} onClick={() => handleSetPriority(TodoPriority.Medium)}>Средний</button>
                    <button className={styles.dropdownItem} onClick={() => handleSetPriority(TodoPriority.Low)}>Низкий</button>
                </div>
            )}
        </div>
    )
}

export {
    DropDown
}
