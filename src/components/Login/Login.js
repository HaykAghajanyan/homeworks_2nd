import {useEffect, useState} from "react";
import {useDispatch} from "react-redux/lib/hooks/useDispatch";
import {addNewUser, setCredentials, setLoggedUser} from "../../Redux/Ducks/userDuck";
import {useSelector} from "react-redux/lib/hooks/useSelector";

const usersImgURL = "/assets/img/users.png";
const loginImgURL = "/assets/img/enter.png";


export default function Login({loggedInHandler}) {

    const dispatch = useDispatch();
    const credentials = useSelector(({UserDuck}) => UserDuck.credentials);

    const [userNameVal, setUserName] = useState("");
    const [passwordVal, setPassword] = useState("");


    useEffect(() => {
        fetch("./data/userCredentials.json")
            .then(res => res.json())
            .then(res => dispatch(setCredentials(res)));
    }, []);


    const validateCredentials = () => {

        const matchingUsers = credentials
            .filter((user) => user.userName === userNameVal)
            .filter(user => user.password === passwordVal);

        matchingUsers.length === 1 ? loggedInHandler() : console.log("Wrong user or pass"); // css կավելացնեմ  ․․․

        dispatch(setLoggedUser(matchingUsers[0]));
    };

    const signUpHandler = (e) => {
        e.preventDefault();
        const isUserNameBusy = credentials.some(({userName}) => userName === userNameVal);
        !isUserNameBusy ? dispatch(addNewUser({
            isLoggedIn: false,
            password: passwordVal,
            userId: credentials.length + 1,
            userName: userNameVal,
        })) : console.log("userName is taken");

        setPassword("");
        setUserName("");


    };


    return (
        <div className={"login-wrapper"}>
            <img src={usersImgURL}/>
            <form className={"login"}>

                <input
                    id={"username-input"}
                    value={userNameVal} onChange={e => setUserName(e.target.value)} type={"text"}
                    autoComplete={"username"}
                    placeholder={"username"}/>


                <input
                    id={"password-input"}
                    onChange={e => setPassword(e.target.value)}
                    type={"password"}
                    autoComplete={"current-password"}
                    placeholder={"password"}/>

                <span className={"log-buttons"}>
                <button className={"sign-btn"} id={"loginBtn"} onClick={validateCredentials}> Log in</button>
                <button className={"sign-btn"} id={"signUpBtn"} onClick={signUpHandler}> Sign up</button>
            </span>

            </form>

        </div>);
}