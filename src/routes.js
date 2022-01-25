import {Navigate} from "react-router-dom";
import Messages from "./components/Messages/Messages";
import Settings from "./components/Settings/Settings";

const routes = [
    {
        path: '/',
        element: <Navigate to="/messages"/>,
        key: 'home'
    },
    {
        path: '/messages',
        element: <Messages />,
        key: 'messages'
    },
    {
        path: '/settings',
        element: <Settings />,
        key: 'settings'
    },
]

export default routes;
