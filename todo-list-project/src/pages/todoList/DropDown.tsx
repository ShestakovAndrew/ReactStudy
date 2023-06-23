import React, {useEffect, useRef, useState} from "react"
import {TodoPriority} from "./model/todo.types"
import style from "./DropDown.module.css"

const DropDown = () => {
    const containerRef = useRef<HTMLDivElement>(null)
    const [isOpen, setIsOpen] = useState(false)
    const [currentPriority, setCurrentPriority] = useState<string>(TodoPriority.High)

    useEffect(() => {
        const handleClick = (event: any) => {
            if (containerRef.current) {
                const isDropDownClick: boolean = containerRef.current.contains(event.target)
                const priority: string = event.target.firstChild.nodeValue

                if (!isDropDownClick && priority === null) {
                    setIsOpen(false)
                    return
                }

                if (isDropDownClick && priority) {
                    setCurrentPriority(priority)
                    setIsOpen((prevState: boolean) => !prevState)
                    return
                }
            }
        }

        document.addEventListener('mousedown', handleClick)
        return () => {
            document.removeEventListener("mousedown", handleClick)
        }
    }, [])

    return (
        <div className={style.container} ref={containerRef}>
            <button className={style.button}>
                {currentPriority}
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
    DropDown
}
