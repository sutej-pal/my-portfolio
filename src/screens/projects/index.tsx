import {SectionHeading} from "../../components/section-heading";
import {SectionSubHeading} from "../../components/section-subheading";
import {Project} from "../../components/project";

export function Projects() {
    return (
        <section className="section-padding" id="projects">
            <div className="container">
                <SectionHeading heading='Projects'/>
                <SectionSubHeading
                    heading='Here you will find some of the personal and clients projects that I created, with each project
                        containing its own case study'
                />
                <Project/>
            </div>
        </section>
    )
}
