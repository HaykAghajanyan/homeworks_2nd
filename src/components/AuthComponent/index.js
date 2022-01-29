import {AUTH_ROUTES} from "../../helpers/constants";
import Login from "../Login";
import Registration from "../Registration";
import {useMemo} from "react";
import {useSelector} from "react-redux";

const [LOGIN, REGISTRATION] = AUTH_ROUTES

const mainComponent = {
    [LOGIN]: <Login/>,
    [REGISTRATION]: <Registration/>
}

const AuthComponent = () => {
    const {authRoute} = useSelector(({AppDuck}) => AppDuck)

    const activeTab = useMemo(() => mainComponent[authRoute], [authRoute])

    return (
        <>
            {activeTab}
        </>
    )
}

export default AuthComponent
