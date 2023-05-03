import {Home} from "../../screens/home";
import {About} from "../../screens/about";
import {Projects} from "../../screens/projects";
import {Contact} from "../../screens/contact";

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
