
export function Synchronous(type) {
	return (value) => ({ type, payload: value })
}
export function Asynchronous(type) {
	return (param) => (dispatch) => {
		let promise = null
		if (param instanceof Promise) {
			promise = param
		} else {
			promise = Promise.resolve(param)
		}
		promise.then(value => dispatch({ type, payload: value }))
	}
}