import './home.scss';

export function Home() {
    return (
        <>
            <section className="row home" id="home">
                <div className="col-md-12 mb-3">
                    <div className="d-flex flex-column h-100 justify-content-center align-items-center">
                        <div className="text-center">
                            <div className="display-4 mb-3">
                                <span className="name text-primary text-uppercase fw-bold">
                                    Hi, I am Sutej Pal Chaudhary
                                </span>
                            </div>
                            <div className="fs-3 text-secondary w-75 m-auto">
                                A Full-Stack Web Developer building the Websites and Web Applications
                                that leads to the success of the overall product.
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
