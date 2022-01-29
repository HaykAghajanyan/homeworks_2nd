import "./index.css";
import Main from "./components/main";
import {useCallback, useEffect, useState} from "react";
import Login from "./components/Login/Login";
import {useDispatch} from "react-redux/lib/hooks/useDispatch";
import {fetchUsers} from "./Redux/Ducks/appDuck/appDuck";


const App = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        fetch("../data/data.json")
            .then(res => res.json())
            .then(res => {
                dispatch(fetchUsers(res.messages));
            });
    }, []);


    const [isLoggedIn, setIsLoggedIn] = useState(false);


    const loggedInHandler = useCallback(() => {
        setIsLoggedIn(!isLoggedIn);
    }, [isLoggedIn]);


    return (
        <>
            {isLoggedIn ? <Main loggedInHandler={loggedInHandler}/> :
                 <Login loggedInHandler={loggedInHandler}/>}
        </>);
};


export default App;
