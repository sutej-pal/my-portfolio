import {Home} from "./screens/home";

// Import bootstrap

import './App.scss'

import {Header} from "./components/header";
import {About} from "./screens/about";
import {Projects} from "./screens/projects";
import {Contact} from "./screens/contact";

function App() {

    return (
        <div className="container-fluid">
            <Header/>
            <Home/>
            <About/>
            <Projects/>
            <Contact/>
        </div>
    )
}

export default App
