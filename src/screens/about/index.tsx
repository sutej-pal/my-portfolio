import './about.scss';
import {SectionHeading} from "../../components/section-heading";

export function About() {
    return (
        <>
            <section className="about container section-padding" id="about">
                <SectionHeading heading='About Me'/>
                <div className="row">
                    <div className="col-md-12 m-auto">
                        <div className="mb-4 text-center section-subheading">
                            Here you will find more information about me, what I do, and my current skills mostly in
                            terms of programming and technology.
                        </div>
                    </div>
                </div>
                <div className="row gx-5 gy-2">
                    <div className="col-md-6">
                        <div className="section-subheading-1 mb-3">Get to know me !</div>
                        <p>
                            I'm open to <strong>Job</strong> opportunities where I can
                            contribute, learn and grow. If you have a good opportunity that
                            matches my skills and experience then don't hesitate to
                            <strong> contact</strong> me.
                        </p>
                    </div>
                    <div className="col-md-6">
                        <div className="section-subheading-1 mb-3">Skills</div>
                        <div className="d-flex justify-content-start flex-wrap gap-3 mb-4">
                            <button className="btn btn-light btn-outline-secondary">HTML</button>
                            <button className="btn btn-light btn-outline-secondary">JavaScript</button>
                            <button className="btn btn-light btn-outline-secondary">TypeScript</button>
                            <button className="btn btn-light btn-outline-secondary">CSS</button>
                            <button className="btn btn-light btn-outline-secondary">SCSS</button>
                            <button className="btn btn-light btn-outline-secondary">Git</button>
                            <button className="btn btn-light btn-outline-secondary">Github</button>
                        </div>
                        <div className="section-subheading-1 mb-3">Frameworks</div>
                        <div className="d-flex justify-content-start flex-wrap gap-3 mb-2">
                            <button className="btn btn-light btn-outline-secondary">MERN Stack</button>
                            <button className="btn btn-light btn-outline-secondary">MEAN Stack</button>
                            <button className="btn btn-light btn-outline-secondary">React</button>
                            <button className="btn btn-light btn-outline-secondary">Angular</button>
                            <button className="btn btn-light btn-outline-secondary">Vue</button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
