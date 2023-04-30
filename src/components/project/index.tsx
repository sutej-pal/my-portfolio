import './project.scss';

interface ProjectProps {
    name: string;
    imageUrl: string;
    description: string;
}

export function Project({
                            name = '',
                            imageUrl = '',
                            description = ''
                        }: ProjectProps) {
    return (
        <div className="row gx-5 gy-2 mb-5 mt-3 project">
            <div className="col-md-6 project-img-container">
                <img src={imageUrl} className="project-image w-100 border border-1 rounded-3" alt=""/>
            </div>
            <div className="col-md-6 project-description">
                <div className="fs-2 fw-medium mb-2 project-name">{name}</div>
                <p className="project-description">
                    {description}
                </p>
                <button className="btn btn-lg btn-secondary px-4 py-2 shadow text-uppercase case-study">Case Study
                </button>
            </div>
        </div>
    )
}
