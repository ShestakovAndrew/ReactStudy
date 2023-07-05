import React, {useEffect, useRef, useState} from "react"
import {TodoPriority} from "../model/todo.types"
import style from "./PriorityDropDown.module.css"
import {useDispatch} from "react-redux"
import {changePriority} from "../model/prioritySlice"
import {useTodoPrioritySelector} from "../../../redux/hooks/useTodoListSelector"

const PriorityDropDown = () => {
    const priority = useTodoPrioritySelector()
    const dispatch = useDispatch()

    const containerRef = useRef<HTMLDivElement>(null)
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        const handleClick = (event: MouseEvent) => {
            if (containerRef.current) {
                const elementClick: Node = event.target as Node
                const isDropDownClick: boolean = containerRef.current.contains(elementClick)
                const priority: string | null = elementClick.firstChild!.nodeValue

                if (!isDropDownClick && priority === null) {
                    setIsOpen(false)
                    return
                }

                if (isDropDownClick && priority) {
                    dispatch(changePriority(priority as TodoPriority))
                    setIsOpen((prevState: boolean) => !prevState)
                    return
                }
            }
        }

        document.addEventListener('mousedown', handleClick)
        return () => {
            document.removeEventListener("mousedown", handleClick)
        }
    })

    return (
        <div className={style.container} ref={containerRef}>
            <button className={style.button}>
                {priority}
            </button>
            {isOpen && (
                <div className={style.dropdown}>
                    <ul>
                        <li>{TodoPriority.High}</li>
                        <li>{TodoPriority.Medium}</li>
                        <li>{TodoPriority.Low}</li>
                    </ul>
                </div>
            )}
        </div>
    )
}

export {
    PriorityDropDown
}
