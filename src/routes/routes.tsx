import { Navigate } from "react-router-dom";
import { Dashboard } from "../views";

export const routes = [
    {
        path: "/",
        element: <Navigate to={"/dashboard"} replace={true} />,
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
    },
]