import './about.scss';
import {SectionHeading} from "../../components/section-heading";

export function About() {
    return (
        <>
            <section className="about section-padding" id="about">
                <SectionHeading heading='About Me'/>
                <div className="row">
                    <div className="col-md-12">
                        <div className="fs-4 m-auto text-center section-subheading">
                            Here you will find more information about me, what I do, and my current skills mostly in
                            terms of programming and technology.
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6"></div>
                    <div className="col-md-6">
                        <div>SKILLS</div>
                        <div className="d-flex justify-content-start flex-wrap gap-3">
                            <button className="btn btn-light">Angular</button>
                            <button className="btn btn-light">Angular</button>
                            <button className="btn btn-light">Angular</button>
                            <button className="btn btn-light">Angular</button>
                            <button className="btn btn-light">Angular</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
