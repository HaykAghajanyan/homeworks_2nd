import {AUTH_ROUTES} from "../../helpers/constants";
import {useMemo} from "react";
import Login from "../Login";
import Registration from "../Registration";
import {useSelector} from "react-redux";
import {appSelector} from "../../helpers/reduxSelctors";

const [LOGIN, REGISTRATION] = AUTH_ROUTES

const activeComponent = {
    [LOGIN]: <Login/>,
    [REGISTRATION]: <Registration/>
}

const AuthComponent = () => {
    const {authRoute} = useSelector(appSelector)
    const activeTab = useMemo(() => activeComponent[authRoute],[authRoute])

    return (
        <div>
            {activeTab}
        </div>
    )
}

export default AuthComponent
