import {Link, Router, BrowserRouter} from "react-router-dom";

export default function Navigation() {
    return <div className={"navigation"}>

            <Link to={"/"}> Messages</Link>
            <Link to={"/settings"}> Settings</Link>

    </div>;
}