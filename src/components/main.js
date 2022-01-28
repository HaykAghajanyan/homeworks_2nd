import {Route, Routes} from "react-router-dom";
import Navigation from "./navigation";
import Messages from "./messages";
import Settings from "./settings";
import {useEffect} from "react";

import {fetchUsers} from "../Redux/Ducks/appDuck/appDuck";
import {useDispatch} from "react-redux/lib/hooks/useDispatch";


export default function Main({loggedInHandler}) {

    const dispatch = useDispatch();


    useEffect(() => {
        fetch("../data/data.json")
            .then(res => res.json())
            .then(res => {
                dispatch(fetchUsers(res.messages));
            });
    }, []);


    return <div>

        <Navigation loggedInHandler={loggedInHandler}/>
        <Routes>
            <Route path={"/"} element={<Messages/>}/>
            <Route path={"/settings"} element={<Settings/>}/>
        </Routes>


    </div>;
}