import './about.scss';
import {SectionHeading} from "../../components/section-heading";

export function About() {
    return (
        <>
            <section className="about section-padding" id="about">
                <SectionHeading heading='About Me'/>
                <div className="row">
                    <div className="col-md-12">
                        <div className="fs-4 text-center my-4">
                            Here you will find more information about me, what I do, and my current skills mostly in
                            terms of
                            programming and technology
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
