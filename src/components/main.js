import {Route, Routes} from "react-router-dom";
import Navigation from "./navigation";
import Messages from "./messages";
import Settings from "./settings";

export default function Main({loggedInHandler}) {


    return <div>

        <Navigation loggedInHandler={loggedInHandler}/>
        <Routes>
            <Route path={"/"} element={<Messages/>}/>
            <Route path={"/settings"} element={<Settings/>}/>
        </Routes>


    </div>;
}