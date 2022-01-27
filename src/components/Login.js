import {useEffect, useState} from "react";

export default function Login({loggedInHandler, loggedInUserHandler}) {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [credentials, setCredentials] = useState([]);


    useEffect(() => {
        fetch("./data/userCredentials.json")
            .then(res => res.json())
            .then(res => setCredentials(res));
    }, []);


    const validateCredentials = () => {
        const matchingUsers = credentials
            .filter((user) => user.userName === userName)
            .filter(user => user.password === password);

        matchingUsers.length === 1 ? loggedInHandler() : console.log("Wrong user or pass"); // css կավելացնեմ  ․․․
        loggedInUserHandler(matchingUsers[0]);
    };


    return <>

        <form className={"login"}>
            <input value={userName} onChange={e => setUserName(e.target.value)} type={"text"} autoComplete={"username"}
                   placeholder={"username..."}/>
            <input onChange={e => setPassword(e.target.value)} type={"password"} autoComplete={"current-password"}
                   placeholder={"password..."}/>

        </form>
        <button onClick={validateCredentials}> Log in</button>

    </>;
}