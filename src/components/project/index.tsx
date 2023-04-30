import './project.scss';
import {useEffect, useState} from "react";
import * as _ from "underscore";
import {detectBootstrapBreakpoint, handleScroll} from "../../helpers";
import cx from "classnames";

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

    const [currentBreakpoint, setCurrentBreakpoint] = useState('');

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        setCurrentBreakpoint(detectBootstrapBreakpoint());
    }, []);


    const handleResize = () => {
        setCurrentBreakpoint(detectBootstrapBreakpoint());
    };

    return (
        <div className="row gx-5 gy-2 mb-5 mt-3 project">
            <div className="col-md-6 project-img-container">
                <img src={imageUrl} className="project-image w-100 border border-1 rounded-3" alt=""/>
            </div>
            <div className={
                cx(
                    'col-md-6 project-description',
                    currentBreakpoint === 'sm' ? 'text-center' : '',
                    currentBreakpoint === 'xs' ? 'text-center' : ''
                )}>
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
