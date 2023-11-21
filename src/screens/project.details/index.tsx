import './project.details.scss';
import { projects, Project } from "../../assets/data-source";
import { useParams } from 'react-router';
import { useEffect, useState } from "react";
import { SectionHeading } from "../../components/section-heading";
import { SectionSubHeading } from "../../components/section-subheading";
import { Link, useNavigate } from "react-router-dom";
import { detectBootstrapBreakpoint } from "../../helpers";
import cx from "classnames";
import DOMPurify from 'dompurify';
import Description from '../../components/description';

function ProjectDetailsPage() {

    const [project, setProject] = useState<Project>();
    const navigate = useNavigate();
    const params: any = useParams();

    useEffect(() => {
        const temp = projects.filter((project: Project) => project.name === params.name);
        setProject(temp[0]);
    }, [params.name]);

    const [currentBreakpoint, setCurrentBreakpoint] = useState('');

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        setCurrentBreakpoint(detectBootstrapBreakpoint());
    }, []);

    const handleResize = () => {
        setCurrentBreakpoint(detectBootstrapBreakpoint());
    };

    return (
        <div className="project-details">
            <div style={{ height: '100px' }}></div>
            <div className="align-items-center d-flex justify-content-center section-1">
                <div className="container">
                    <SectionHeading heading={project?.name as string}></SectionHeading>
                    <SectionSubHeading
                        heading={`This page contains detailed info about <strong>${project?.name}</strong> which includes Project Overview, Tools used and live links to official product.`}
                    />
                    <div className={cx('text-center', project?.link ? '' : 'd-none')}>
                        <Link to={project?.link ? project?.link : ''} target="_blank">
                            <button
                                className="btn btn-lg btn-secondary fs-4 px-5 py-3 shadow-lg text-uppercase case-study">Project
                                Link
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="section-2">
                <div className="container pt-5 mt-3">
                    <div className="row">
                        <div className="col-md-8 m-auto">
                            <img src={project?.image} className="project-image w-100 border border-1 rounded-3" alt="" />
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-8 m-auto">
                            <div className="fs-3 fw-bolder mb-2">
                                Project Overview
                            </div>
                            <div className={cx('text-justify', ['sm', 'xs'].includes(currentBreakpoint) ? 'fs-6' : 'fs-5')}>
                                {project?.description.map((description: string, index: number) => <Description key={index} htmlString={description} />)}
                            </div>
                            <div className="fs-3 fw-bolder mt-5 mb-4">
                                Tools Used
                            </div>
                            <div className="d-flex justify-content-start flex-wrap gap-3 my-4">
                                {
                                    project?.tools?.map((tool: string, index: number) => {
                                        return <button className="border-0 btn btn-light btn-outline-secondary"
                                            key={index}>{tool}</button>
                                    })
                                }
                            </div>
                            <div className="my-5 py-5">
                                <button onClick={() => navigate(-1)}
                                    className="btn btn-secondary case-study p-3 px-4 shadow text-uppercase">
                                    Go Back
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetailsPage
