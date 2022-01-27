import "./index.css";
import Main from "./components/main";
import {useCallback, useState} from "react";
import Login from "./components/Login";


const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loggedInUser, setLoggedInUser] = useState({});

    console.log(isLoggedIn);

    const loggedInHandler = useCallback(() => {
        setIsLoggedIn(!isLoggedIn);
    }, [isLoggedIn]);


    const loggedInUserHandler = useCallback((id) => {
        setLoggedInUser(id);
    }, [loggedInUser]);

    return <>
        {isLoggedIn ? <Main loggedInUser={loggedInUser} loggedInHandler={loggedInHandler}/> : <Login loggedInUserHandler={loggedInUserHandler} loggedInHandler={loggedInHandler}/>}
    </>;
};


export default App;
