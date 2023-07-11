import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css'

const PAGE_FIRST: number = 1
const RECORDS_PER_PAGE: number = 5

type NavigationBarProps = {
    todoListLength: number,
    currentPage: number,
    setCurrentPage: (value: (((prevState: number) => number) | number)) => void
}

const Pagination = ({ todoListLength, currentPage, setCurrentPage }: NavigationBarProps) => {
    const nPages = Math.ceil(todoListLength / RECORDS_PER_PAGE)
    const numbers = [...Array(nPages + PAGE_FIRST).keys()].slice(PAGE_FIRST)

    const prevPageHandler = () => {
        if (currentPage !== PAGE_FIRST) {
            setCurrentPage(currentPage - 1)
        }
    }

    const changePageHandler = (number: number) => {
        setCurrentPage(number)
    }

    const nextPageHandler = () => {
        if (currentPage !== nPages) {
            setCurrentPage(currentPage + 1)
        }
    }

    return (
        <ul className='pagination justify-content-center'>
            <li className='page-item'>
                <a href='#/' className='page-link' onClick={prevPageHandler}>Прошлая</a>
            </li>
            {
                numbers.map(number => (
                    <li className={`page-item ${currentPage === number ? 'active' : ''}`} key={number}>
                        <a href='#/' className='page-link' onClick={() => changePageHandler(number)}>{number}</a>
                    </li>
                ))
            }
            <li className='page-item'>
                <a href='#/' className='page-link' onClick={nextPageHandler}>Следующая</a>
            </li>
        </ul>
    )
}

export {
    Pagination,
    PAGE_FIRST,
    RECORDS_PER_PAGE
}