import {SectionHeading} from "../../components/section-heading";
import {SectionSubHeading} from "../../components/section-subheading";
import {Project} from "../../components/project";
import {MyProjects} from '../../assets/myProjects';

export function Projects() {
    return (
        <section className="section-padding" id="projects">
            <div className="container">
                <SectionHeading heading='Projects'/>
                <SectionSubHeading
                    heading='Here you will find some of the personal and clients projects that I created, with each project
                        containing its own case study'
                />
                {
                    MyProjects.map((project: any, index: number) => {
                        return <Project key={index}
                                        name={project.name}
                                        imageUrl={project.image}
                                        briefSummary={project.briefSummary}
                        />
                    })
                }
            </div>
        </section>
    )
}
