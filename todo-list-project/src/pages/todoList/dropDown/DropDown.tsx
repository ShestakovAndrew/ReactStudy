import {useEffect, useRef, useState} from "react"
import {useAppDispatch} from "../../../hooks/baseHooks"
import {useTodoPrioritySelector} from "../../../hooks/useTodoPrioritySelector"
import {changePriorityAction} from "../model/priority.slice"
import {priorityEnumToString, TodoPriority} from "../../../types/todo.types"
import styles from "./DropDown.module.css"

type DropDownProps = {
    todoPriority: TodoPriority,
    setTodoPriority: (value: (((prevState: TodoPriority) => TodoPriority) | TodoPriority)) => void,
    isChangeStoreTodoPriority?: boolean,
}

const DropDown = ({todoPriority, setTodoPriority, isChangeStoreTodoPriority = false}: DropDownProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const priorityDropDownRef = useRef<HTMLDivElement>(null)
    const todoPriorityFromStore = useTodoPrioritySelector()
    const dispatch = useAppDispatch()

    const handleDropdownButtonClick = () => {
        setIsOpen((prevState: boolean) => !prevState)
    }

    const handleDropdownItemButtonClick = (newPriority: TodoPriority) => {
        if (newPriority !== todoPriority) {
            setTodoPriority(newPriority)
        }

        if (isChangeStoreTodoPriority) {
            dispatch(changePriorityAction(newPriority))
        }

        setIsOpen(false)
    }

    const handleClick = (event: MouseEvent) => {
        if (priorityDropDownRef.current) {
            const elementClick: Node = event.target as Node
            const isDropDownClick: boolean = priorityDropDownRef.current.contains(elementClick)

            if (!isDropDownClick) {
                setIsOpen(false)
            }
        }
    }

    useEffect(() => {
        document.addEventListener('mousedown', handleClick)
        return () => {
            document.removeEventListener("mousedown", handleClick)
        }
    }, [])

    return (
        <div ref={priorityDropDownRef}>
            <button type="button" className={styles.dropdownButton} onClick={handleDropdownButtonClick}>
                {
                    priorityEnumToString(isChangeStoreTodoPriority ? todoPriorityFromStore : todoPriority)
                }
            </button>
            {isOpen && (
                <div className={styles.dropdownMenu}>
                    <button className={styles.dropdownItemButton} onClick={() => handleDropdownItemButtonClick(TodoPriority.High)}>Высокий</button>
                    <button className={styles.dropdownItemButton} onClick={() => handleDropdownItemButtonClick(TodoPriority.Medium)}>Средний</button>
                    <button className={styles.dropdownItemButton} onClick={() => handleDropdownItemButtonClick(TodoPriority.Low)}>Низкий</button>
                </div>
            )}
        </div>
    )
}

export {
    DropDown
}
