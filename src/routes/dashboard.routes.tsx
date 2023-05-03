import DashboardPage from "../pages/dashboard.page";
import ProjectDetailsPage from "../pages/project.details";

const dashboardRoutes = () => (
    [
        {
            path: "/",
            element: <DashboardPage/>,
        },
        {
            path: "/project-details/:name",
            element: <ProjectDetailsPage/>,
        },
    ]
)

export default dashboardRoutes
