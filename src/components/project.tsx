export function Project() {
    return (
        <div className="row gx-5 gy-2 project">
            <div className="col-md-6 project-img-container">
                <img src="/image/hihfs.png" className="project-image w-100 border border-1 rounded-3" alt=""/>
            </div>
            <div className="col-md-6 project-description">
                <div className="fs-2 fw-medium mb-2 project-name">HIHFS</div>
                <p className="project-description">
                    (Primarily known as HIHFS)Lorem ipsum dolor sit amet, consectetur adipisicing elit. At beatae consectetur consequatur
                    error eveniet facilis iste iure laudantium libero minima non, numquam obcaecati quasi sed
                    tempora veniam vitae voluptas voluptatum.
                </p>
                <button className="btn btn-lg btn-secondary px-4 py-2 shadow text-uppercase case-study">Case Study</button>
            </div>
        </div>
    )
}
