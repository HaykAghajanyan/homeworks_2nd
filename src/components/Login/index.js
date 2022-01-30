import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useMessagesData } from "../../contexts/messagesContext";

function Login({setUserName}) {
	const inputUserName = useRef(null);
	const inputPass = useRef(null);
	const { messages } = useMessagesData();

	let navigate = useNavigate();

	const handleBtn = () => {
		for (let el of messages) {
			if (
				el["name"] === inputUserName.current.value &&
				el["password"] === inputPass.current.value
			) {
				setUserName(inputUserName.current.value);
				return navigate("../loggedIn");
			}
		}

		return navigate("../badUserName");
	};

	return (
		<>
			<div className="login">
				<input
					ref={inputUserName}
					className="login-input"
					type="text"
					placeholder="Username"
				></input>
				<input
					ref={inputPass}
					className="login-input"
					type="password"
					placeholder="Password"
				></input>
				<button onClick={handleBtn}>Login</button>
			</div>
		</>
	);
}

export default Login;
