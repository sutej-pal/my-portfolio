import {useEffect, useRef} from "react";
import classnames from "classnames";
import * as _ from 'underscore';

import './header.scss';

const cx = classnames;

export function Header() {

    const navBarToggle = useRef(null);

    const handleScroll = () => {
        // Get current scroll position
        const scrollY = parseInt(window.scrollY.toString());

        const sections = document.querySelectorAll("section[id]");

        // Now we loop through sections to get height, top and ID values for each

        sections.forEach((current: any) => {
            const sectionHeight = current.offsetHeight;
            const sectionTop = current.offsetTop - 80;
            const sectionId = current.getAttribute("id");

            /*
            - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
            - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
            */
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                document.querySelector(".navbar-nav a[href*=" + sectionId + "]")?.classList.add("active");
            } else {
                document.querySelector(".navbar-nav a[href*=" + sectionId + "]")?.classList.remove("active");
            }
        });
    }

    useEffect(() => {
        window.addEventListener("scroll", _.throttle(handleScroll, 50));
    }, []);

    const closeNavBarDropdown = () => {
        if (window.innerWidth < 992) {
            if (navBarToggle && navBarToggle.current) {
                const el = navBarToggle.current as HTMLElement
                el.click();
            }
        }
    }

    return (
        <nav className="navbar fixed-top navbar-expand-lg p-0 header shadow-sm">
            <div className="container-fluid bg-white h-100 header-container">
                <a className="align-items-center d-flex gap-3 navbar-brand" href="#home">
                    <div className="align-text-top d-inline-block overflow-hidden rounded-circle">
                        <img src="/image/sutej.png" alt="Sutej Pal"/>
                    </div>
                    <span className="fs-2 text-secondary text-uppercase">
                        Sutej Pal
                    </span>
                </a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                        aria-label="Toggle navigation">
                    <span ref={navBarToggle} className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className={cx('nav-link fs-3 px-4 py-3 text-uppercase active')}
                               href="#home" onClick={() => closeNavBarDropdown()}>Home</a>
                        </li>
                        <li className="nav-item">
                            <a className={cx('nav-link fs-3 px-4 py-3 text-uppercase')}
                               href="#about" onClick={() => closeNavBarDropdown()}>About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fs-3 px-4 py-3 text-uppercase"
                               href="#projects" onClick={() => closeNavBarDropdown()}>Projects</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link fs-3 px-4 py-3 text-uppercase"
                               href="#contact" onClick={() => closeNavBarDropdown()}>Contact</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
