export async function GetMessages() {
	const response = await fetch(process.env.REACT_APP_MESSAGES)
	const data = await response.json()
	return { messages: data?.messages, colorSchem: {} }
}