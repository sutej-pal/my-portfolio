import {Home} from "../../screens/home";
import {About} from "../about";
import {Projects} from "../projects";
import {Contact} from "../contact";

function DashboardPage() {
    return (
        <div className="container-fluid">
            <Home/>
            <About/>
            <Projects/>
            <Contact/>
        </div>
    )
}

export default DashboardPage
