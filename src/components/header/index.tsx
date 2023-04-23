import './header.scss';

export function Header() {
    return (
        <nav className="navbar fixed-top navbar-expand-lg p-0 header">
            <div className="container-fluid bg-white h-100">
                <a className="navbar-brand" href="#">
                    <img src="../../../public/vite.svg" alt="Logo" width="30" height="24"
                         className="d-inline-block align-text-top "/>
                    <span className="text-secondary">
                        Sutej Pal Chaudhary
                    </span>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link fs-3 px-4 py-3 text-uppercase text-secondary active"
                               aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fs-3 px-4 py-3 text-uppercase text-secondary" href="#about">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fs-3 px-4 py-3 text-uppercase text-secondary" href="#projects">Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fs-3 px-4 py-3 text-uppercase text-secondary" href="#contact">Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
