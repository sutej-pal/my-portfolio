import "./home.scss";
import { useEffect, useState } from "react";
import { detectBootstrapBreakpoint } from "../../helpers";
import cx from "classnames";
import { socialLinks } from "../../assets/data-source";
import { DefaultLinkButton } from "../../components/form-elements/default-button";

export function Home() {
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
      <section className="row custom-scroll position-relative" id="home">
        <div className="col-md-12">
          <div className="container h-100">
            <div className="row vh-100">
              <div className="col-md-12 mb-3">
                <div className="d-flex flex-column h-100 justify-content-center align-items-center">
                  <div className="text-center">
                    <div className="display-4 mb-3">
                      <span className="name text-primary h-2 fw-bold font-family-montserrat">
                        Hi,{" "}
                        <span className="text-uppercase">
                          I'm Sutej Pal Chaudhary
                        </span>
                      </span>
                    </div>
                    <div className="m-auto fw-normal text-center section-subheading">
                      A Full-Stack Web Developer building the Websites and Web
                      Applications that leads to the success of the overall
                      product.
                    </div>
                    <div className="mt-4">
                      <DefaultLinkButton
                        href={"#projects"}
                        label={"projects"}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={cx(
                  "social-links w-auto shadow bg-white",
                  ["md", "sm", "xs"].includes(currentBreakpoint)
                    ? "d-none"
                    : "",
                )}
              >
                {socialLinks.map((link, index: number) => {
                  return (
                    <div key={index} className="p-1 py-2">
                      <a href={link.link}>
                        <i
                          className={cx(
                            "bi text-secondary fs-3",
                            link.iconClassName,
                          )}
                        ></i>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        <div className="field">
          <div className="mouse"></div>
        </div>
      </section>
    </>
  );
}
