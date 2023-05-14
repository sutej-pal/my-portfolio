import {Header} from "../components/header";
import {createBrowserRouter, Outlet} from "react-router-dom";
import dashboardRoutes from "./dashboard.routes";
import {Footer} from "../components/footer";
import ScrollToTop from "../components/scroll-top-top";
import React from "react";
import {NotFoundPage} from "../pages/not-found.page";


function generateRoutes() {
    return createBrowserRouter(
        [
            {
                path: '/',
                element: (
                    <>
                        <ScrollToTop/>
                        <Header/>
                        <Outlet/>
                        <Footer/>
                    </>
                ),
                children: dashboardRoutes(),
                errorElement: NotFoundPage()
            }
        ]
    )
}

export default generateRoutes;
