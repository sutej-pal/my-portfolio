import {useEffect, useRef, useState} from "react";
import {HashLink} from 'react-router-hash-link';
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
        setCurrentBreakpoint(detectBootstrapBreakpoint());
    }, []);

    const handleBSDropdown = (e: any) => {
        const t1 = document.querySelector('#navbarNavDropdown');
        if (t1 && t1.classList.contains('show')) {
            const t2 = document.querySelector('.navbar');
            if ([2, 10].includes(e.target.compareDocumentPosition(t2))) {
                closeNavBarDropdown();
            }
        }
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
        <div id="header">
            <nav className={cx('navbar fixed-top navbar-expand-lg p-0 header')}>
                <div className="container-fluid bg-white shadow-sm header-container">
                    <a className="align-items-center d-flex gap-3 navbar-brand" href="#home">
                        <div className="align-text-top d-inline-block overflow-hidden rounded-circle">
                            <img src="/images/sutej.png" alt="Sutej Pal"/>
                        </div>
                        <span className="fs-2 text-secondary text-uppercase">
                        Sutej Pal
                    </span>
                    </a>
                    <button className="navbar-toggler border-0 shadow-none" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                            aria-label="Toggle navigation" ref={navBarToggle}>
                        <div className="hamburger">
                            <span className="line"></span>
                            <span className="line"></span>
                            <span className="line"></span>
                        </div>
                    </button>
                    <div className={
                        cx(
                            'collapse navbar-collapse justify-content-end',
                            ['md', 'sm', 'xs'].includes(currentBreakpoint) ? 'bg-white' : '',
                        )} id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <HashLink className={cx('nav-link fs-3 px-4 py-3 text-uppercase active',
                                    ['sm', 'xs'].includes(currentBreakpoint) ? 'fs-5' : '',
                                )}
                                          to="/#home">Home</HashLink>
                            </li>
                            <li className="nav-item">
                                <HashLink className={cx('nav-link fs-3 px-4 py-3 text-uppercase',
                                    ['sm', 'xs'].includes(currentBreakpoint) ? 'fs-5' : '',)}
                                          to="/#about">About</HashLink>
                            </li>
                            <li className="nav-item">
                                <HashLink className={cx('nav-link fs-3 px-4 py-3 text-uppercase',
                                    ['sm', 'xs'].includes(currentBreakpoint) ? 'fs-5' : '',)}
                                          to="/#projects">Projects</HashLink>
                            </li>
                            <li className="nav-item">
                                <HashLink className={cx('nav-link fs-3 px-4 py-3 text-uppercase',
                                    ['sm', 'xs'].includes(currentBreakpoint) ? 'fs-5' : '',)}
                                          to="/#contact">Contact</HashLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
