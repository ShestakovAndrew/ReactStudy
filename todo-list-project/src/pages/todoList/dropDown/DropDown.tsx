import React, {useEffect, useRef, useState} from "react"

import {priorityEnumToString, TodoPriority} from "../model/todo.types"
import style from "./DropDown.module.css"

import {changePriorityAction} from "../model/prioritySlice"
import {useTodoPrioritySelector} from "../../../redux/hooks/useTodoListSelector"
import {useAppDispatch} from "../../../redux/hooks/baseHooks"

type DropDownProps = {
    isChangeStoreTodoPriority?: boolean
}

const DropDown = ({isChangeStoreTodoPriority = false}: DropDownProps) => {
    const [isOpen, setIsOpen] = useState(false)
    const [currentPriority, setCurrentPriority] = useState<TodoPriority>(TodoPriority.High)

    const priorityDropDownRef = useRef<HTMLDivElement>(null)

    const dispatch = useAppDispatch()
    const priorityFromStore = useTodoPrioritySelector()

    const handleToggleShow = () => {
        setIsOpen((prevState: boolean) => !prevState)
    }

    const handleSetPriority = (priority: TodoPriority) => {
        if (isChangeStoreTodoPriority)
        {
            dispatch(changePriorityAction(priority))
        }

        setCurrentPriority(priority)
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
        <div className={style.dropdown} ref={priorityDropDownRef} >
            <button className={style.button} onClick={handleToggleShow}>
                {
                    priorityEnumToString(isChangeStoreTodoPriority ? priorityFromStore : currentPriority)
                }
            </button>
            {isOpen && (
                <ul className={style.dropdownMenu}>
                    <li onClick={() => handleSetPriority(TodoPriority.High)}>Высокий</li>
                    <li onClick={() => handleSetPriority(TodoPriority.Medium)}>Средний</li>
                    <li onClick={() => handleSetPriority(TodoPriority.Low)}>Низкий</li>
                </ul>
            )}
        </div>
    )
}

export {
    DropDown
}
