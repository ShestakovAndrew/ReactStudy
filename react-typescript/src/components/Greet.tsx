type GreetProps = {
	name: string
	messageCount?: number
	isLoggedIn: boolean
}
export const Greet = (props: GreetProps) => {
	return (
		<div>
			<h2>
				{props.isLoggedIn
					? `Привет ${props.name}! У тебя ${props.messageCount} непрочитанных сообщений`
					: `Привет гость`
				}
			</h2>
		</div>
	)
}
