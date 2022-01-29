import {useEffect, useState} from "react";
import {useDispatch} from "react-redux/lib/hooks/useDispatch";
import {setLoggedUser} from "../../Redux/Ducks/userDuck";

const usersImgURL = "/assets/img/users.png";


export default function Login({loggedInHandler}) {

    const dispatch = useDispatch();


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

        dispatch(setLoggedUser(matchingUsers[0]));
    };


    return (
        <div className={"login-wrapper"}>
            <img src={usersImgURL}/>
            <form className={"login"}>

                <input
                    id={"username-input"}
                    value={userName} onChange={e => setUserName(e.target.value)} type={"text"}
                    autoComplete={"username"}
                    placeholder={"username..."}/>


                <input
                    id={"password-input"}
                    onChange={e => setPassword(e.target.value)} type={"password"} autoComplete={"current-password"}
                       placeholder={"password..."}/>

                <button onClick={validateCredentials}> Log in</button>
            </form>

        </div>);
}