import { NavLink } from "react-router-dom"

export const PageNavigationBar = () => {
	const navLinkStyles = ({isActive}: {isActive: boolean} ) => {
		return {
			fontWeight: isActive ? 'bold' : 'normal',
			textDecoration: isActive ? 'none' : 'underline'
		}
	}

	return (
		<nav className='primary-nav'>
			<NavLink style={navLinkStyles} to='/view-todo-list'>
				Список задач
			</NavLink>

			<NavLink style={navLinkStyles} to='/add-new-todo-element'>
				Добавить задачу
			</NavLink>
		</nav>
	)
}