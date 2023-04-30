import {Header} from "../components/header";
import {createBrowserRouter, Outlet} from "react-router-dom";
import dashboardRoutes from "./dashboard.routes";


function generateRoutes() {
    return createBrowserRouter(
        [
            {
                path: '/',
                element: (
                    <>
                        <Header/>
                        <Outlet/>
                    </>
                ),
                children: dashboardRoutes()
            }
        ]
    )
}

export default generateRoutes;
