import {useEffect, useRef, useState} from "react";
import classnames from "classnames";
import * as _ from 'underscore';

import './header.scss';
import {detectBootstrapBreakpoint, handleScroll} from "../../helpers";

const cx = classnames;

export function Header() {

    const navBarToggle = useRef(null);
    const [currentBreakpoint, setCurrentBreakpoint] = useState('');

    useEffect(() => {
        window.addEventListener("scroll", _.throttle(handleScroll, 50));
        window.addEventListener("click", handleBSDropdown);
        window.addEventListener('resize', handleResize);
    }, []);

    const handleBSDropdown = (e: any) => {
        console.log(e)
    };

    const handleResize = () => {
        setCurrentBreakpoint(detectBootstrapBreakpoint());
    };

    const closeNavBarDropdown = () => {
        if (window.innerWidth < 992) {
            if (navBarToggle && navBarToggle.current) {
                const el = navBarToggle.current as HTMLElement
                el.click();
            }
        }
    }

    return (
        <nav className={cx('navbar fixed-top navbar-expand-lg p-0 header shadow-sm')}>
            <div className="container-fluid bg-white h-100 header-container">
                <a className="align-items-center d-flex gap-3 navbar-brand" href="#home">
                    <div className="align-text-top d-inline-block overflow-hidden rounded-circle">
                        <img src="/images/sutej.png" alt="Sutej Pal"/>
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
                <div className={cx('collapse navbar-collapse justify-content-end', currentBreakpoint === 'md' ? 'bg-white shadow' : '')} id="navbarNavDropdown">
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
