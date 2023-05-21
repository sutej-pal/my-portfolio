import './home.scss';
import {useEffect, useState} from "react";
import {detectBootstrapBreakpoint} from "../../helpers";
import cx from "classnames";
import {socialLinks} from "../../assets/data-source";

export function Home() {

    const [currentBreakpoint, setCurrentBreakpoint] = useState('');

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        setCurrentBreakpoint(detectBootstrapBreakpoint());
    }, []);


    const handleResize = () => {
        setCurrentBreakpoint(detectBootstrapBreakpoint());
    };
    return (
        <>
            <section className="row custom-scroll position-relative" id="home">
                <div className="col-md-12">
                    <div className="container h-100">
                        <div className="row vh-100">
                            <div className="col-md-12 mb-3">
                                <div className="d-flex flex-column h-100 justify-content-center align-items-center">
                                    <div className="text-center">
                                        <div className="display-4 mb-3">
                                <span className="name text-primary text-uppercase h-2 fw-bold">
                                    Hi, I'm Sutej Pal Chaudhary
                                </span>
                                        </div>
                                        <div className="m-auto fw-normal text-center section-subheading">
                                            A Full-Stack Web Developer building the Websites and Web Applications
                                            that leads to the success of the overall product.
                                        </div>
                                        <div className="mt-4">
                                            <a href="#projects"
                                               className="btn btn-lg btn-secondary shadow text-uppercase text-primary py-3 px-5 fw-medium fs-5 text-white">projects</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={
                                cx(
                                    'social-links w-auto shadow bg-white',
                                    ['md', 'sm', 'xs'].includes(currentBreakpoint) ? 'd-none' : '',
                                )}>
                                {
                                    socialLinks.map((link, index: number) => {
                                        return <div key={index} className="p-1 py-2">
                                            <a href={link.link} target="_blank">
                                                <i className={cx('bi text-secondary fs-3', link.iconClassName)}></i>
                                            </a>
                                        </div>
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className="field">
                    <div className="mouse"></div>
                </div>
            </section>
        </>
    )
}
