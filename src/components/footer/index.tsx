import './footer.scss';
import {useEffect, useState} from "react";
import {detectBootstrapBreakpoint} from "../../helpers";

export function Footer() {

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
            <div className="bg-dark footer">
                <div className="container text-white">
                    <div className="row pt-4 pb-5">
                        <div className="col-md-6">
                            <div className="py-4 fs-2 text-uppercase fw-medium">
                                Sutej Pal
                            </div>
                            <div className="fs-6">
                                A Full-Stack Web Developer building the Websites and Web Applications
                                that leads to the success of the overall product.
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="py-4 fs-2 text-uppercase fw-medium text-end">
                                Social
                            </div>
                            <div className="align-content-center d-flex gap-3 justify-content-end">
                                <a role="button" href="https://github.com/sutej-pal/" target="_blank">
                                    <i className="bi bi-github text-white fs-3"></i>
                                </a>
                                <a role="button" href="https://www.linkedin.com/in/sutej-pal/" target="_blank">
                                    <i className="bi bi-linkedin text-white fs-3"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <div className="row">
                        <div className="col-md-10 py-3 pb-4">
                            <div className="fs-6 text-center">
                                Made with love by Sutej Pal
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
