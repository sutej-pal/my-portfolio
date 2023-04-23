import {Home} from "./screens/home";

// Import bootstrap

import './App.scss'

import {Header} from "./components/header";
import {About} from "./screens/about";

function App() {

    return (
        <div className="container-fluid">
            <Header/>
            <Home/>
            <About/>
        </div>
    )
}

export default App
