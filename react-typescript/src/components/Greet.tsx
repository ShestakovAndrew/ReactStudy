type GreetProps = {
	name: string
}
export const Greet = (props: GreetProps) => {
	return (
		<div>
			<h2>Привет {props.name}! У тебя 10 непрочитанных сообщений</h2>
		</div>
	)
}
