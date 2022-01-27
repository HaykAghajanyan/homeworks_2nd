import {NavLink} from "react-router-dom";

const time = (new Date).getHours();

const showWelcomeTime = (time) => {
    if (time <= 11) return "Good Morning";
    else if (time <= 16) return "Good day";
    else return "Good evening";
};

export default function Navigation({loggedInUser, loggedInHandler}) {


    return (
        <>
            <div className={"loggedIn-user"}>
                <p> {showWelcomeTime(time)}, {loggedInUser.userName} </p>

                <NavLink to={""} onClick={loggedInHandler}>Logout</NavLink>
            </div>
            <div className={"navigation"}>
                <NavLink to={"/"}> Messages</NavLink>
                <NavLink to={"/settings"}> Settings</NavLink>

            </div>


        </>
    );
}