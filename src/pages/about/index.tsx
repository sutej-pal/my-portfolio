import "./about.scss";
import { SectionHeading } from "../../components/section-heading";
import { useEffect, useState } from "react";
import { detectBootstrapBreakpoint } from "../../helpers";
import cx from "classnames";
import { SectionSubHeading } from "../../components/section-subheading";

export function About() {
  const [currentBreakpoint, setCurrentBreakpoint] = useState("");

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    setCurrentBreakpoint(detectBootstrapBreakpoint());
  }, []);

  const handleResize = () => {
    setCurrentBreakpoint(detectBootstrapBreakpoint());
  };
  return (
    <>
      <section className="about section-padding min-vh-100" id="about">
        <div className="container">
          <SectionHeading heading="About Me" />
          <SectionSubHeading
            heading="Here you will find more information about me, what I do, and my current skills mostly in
                                terms of programming and technology."
          />
          <div className="row gx-5 gy-2">
            <div className="col-md-6">
              <div className="section-subheading-1 mb-3">Get to know me !</div>
              <p
                className={cx(
                  ["sm", "xs"].includes(currentBreakpoint) ? "fs-6" : "fs-5",
                )}
              >
                I'm open to <strong>Job</strong> opportunities where I can
                contribute, learn and grow. If you have a good opportunity that
                matches my skills and experience then don't hesitate to
                <strong> contact</strong> me.
              </p>
            </div>
            <div className="col-md-6">
              <div className="section-subheading-1 mb-3">Skills</div>
              <div className="d-flex justify-content-start flex-wrap gap-3 mb-4">
                <button className="border-0 btn btn-light btn-outline-secondary">
                  HTML
                </button>
                <button className="border-0 btn btn-light btn-outline-secondary">
                  JavaScript
                </button>
                <button className="border-0 btn btn-light btn-outline-secondary">
                  TypeScript
                </button>
                <button className="border-0 btn btn-light btn-outline-secondary">
                  CSS
                </button>
                <button className="border-0 btn btn-light btn-outline-secondary">
                  SCSS
                </button>
                <button className="border-0 btn btn-light btn-outline-secondary">
                  Git
                </button>
                <button className="border-0 btn btn-light btn-outline-secondary">
                  Github
                </button>
              </div>
              <div className="section-subheading-1 mb-3">Frameworks</div>
              <div className="d-flex justify-content-start flex-wrap gap-3 mb-2">
                <button className="border-0 btn btn-light btn-outline-secondary">
                  MERN Stack
                </button>
                <button className="border-0 btn btn-light btn-outline-secondary">
                  MEAN Stack
                </button>
                <button className="border-0 btn btn-light btn-outline-secondary">
                  React
                </button>
                <button className="border-0 btn btn-light btn-outline-secondary">
                  Angular
                </button>
                <button className="border-0 btn btn-light btn-outline-secondary">
                  Vue
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
