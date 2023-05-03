import './home.scss';

export function Home() {
    return (
        <>
            <section className="row custom-scroll" id="home">
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
                <div className="field">
                    <div className="mouse"></div>
                </div>
            </section>
        </>
    )
}
