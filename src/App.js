import "./index.css";
import Main from "./components/main";
import {useCallback, useState} from "react";
import Login from "./components/Login/Login";


const App = () => {

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
