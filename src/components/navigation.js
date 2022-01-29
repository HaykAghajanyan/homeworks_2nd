import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux/lib/exports";

const logoutImgURL = "/assets/img/logout.png"


const time = (new Date).getHours();

const showWelcomeTime = (time) => {
    if (time <= 11) return "Good Morning";
    else if (time <= 16) return "Good day";
    else return "Good evening";
};

export default function Navigation({loggedInHandler}) {

    const loggedInUser = useSelector(({UserDuck}) => UserDuck.currentUser);



    return (
        <>
            <div className={"loggedIn-user"}>
                <p> {showWelcomeTime(time)}, {loggedInUser?.userName} </p>
                <div onClick={loggedInHandler} className={"logout"}>
                    <NavLink to={""} >Logout</NavLink>
                    <img src={logoutImgURL}/>
                </div>

            </div>

            <div className={"navigation"}>
                <NavLink to={"/"}> Messages</NavLink>
                <NavLink to={"/settings"}> Settings</NavLink>

            </div>


        </>
    );
}