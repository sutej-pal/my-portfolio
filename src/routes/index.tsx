import {Header} from "../components/header";
import {createBrowserRouter, Outlet} from "react-router-dom";
import dashboardRoutes from "./dashboard.routes";
import {Footer} from "../components/footer";


function generateRoutes() {
    return createBrowserRouter(
        [
            {
                path: '/',
                element: (
                    <>
                        <Header/>
                        <Outlet/>
                        <Footer/>
                    </>
                ),
                children: dashboardRoutes()
            }
        ]
    )
}

export default generateRoutes;
