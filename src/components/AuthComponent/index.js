import {useSelector} from "react-redux";
import {appSelector} from "../../helpers/reduxSelctors";
import {AUTH_ROUTES} from '../../helpers/constants'
import Login from "../Login";
import Registration from "../Registration";
import {useMemo} from "react";

const [LOGIN, REGISTRATION] = AUTH_ROUTES

const mainComponent = {
    [LOGIN]: <Login/>,
    [REGISTRATION]: <Registration/>
}

const AuthComponent = () => {
    const {authRoute} = useSelector(appSelector)
    const activeTab = useMemo(() => mainComponent[authRoute], [authRoute])

    return (
        <>
            {activeTab}
        </>
    )
}

export default AuthComponent
