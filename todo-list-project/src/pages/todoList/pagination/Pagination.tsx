import styles from './Pagination.module.css'

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
        <div className={styles.paginationContainer}>
            <button className={styles.prevPage} onClick={prevPageHandler}>Прошлая</button>
            {
                numbers.map((number: number) => (
                    <button
                        className={styles.page + ` ${currentPage === number ? styles.active : ''}`}
                        onClick={() => changePageHandler(number)}
                        key={number}
                    >
                        {number}
                    </button>
                ))
            }
            <button className={styles.nextPage} onClick={nextPageHandler}>Следующая</button>
        </div>
    )
}

export {
    Pagination,
    PAGE_FIRST,
    RECORDS_PER_PAGE
}