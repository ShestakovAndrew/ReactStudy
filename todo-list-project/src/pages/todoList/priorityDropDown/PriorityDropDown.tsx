import React, {useEffect, useRef, useState} from "react"
import {useDispatch} from "react-redux"

import {priorityEnumToString, TodoPriority} from "../model/todo.types"
import style from "./PriorityDropDown.module.css"

import {changePriorityAction} from "../model/prioritySlice"
import {useTodoPrioritySelector} from "../../../redux/hooks/useTodoListSelector"

const PriorityDropDown = () => {
    const priority = useTodoPrioritySelector()
    const dispatch = useDispatch()

    const priorityDropDownRef = useRef<HTMLDivElement>(null)
    const [isOpen, setIsOpen] = useState(false)

    const handleToggleShow = () => {
        setIsOpen((prevState: boolean) => !prevState)
    }

    const handleSetPriority = (priority: TodoPriority) => {
        dispatch(changePriorityAction(priority))
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
            <button className={style.button} onClick={handleToggleShow}>{priorityEnumToString(priority)}</button>
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
    PriorityDropDown
}
