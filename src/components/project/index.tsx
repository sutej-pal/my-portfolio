import "./project.scss";
import { useEffect, useState } from "react";
import * as _ from "underscore";
import { detectBootstrapBreakpoint, handleScroll } from "../../helpers";
import cx from "classnames";
import { Link } from "react-router-dom";
import { DefaultLinkButton } from "../form-elements/default-button";

interface ProjectProps {
  name: string;
  imageUrl: string;
  briefSummary: string;
}

export function Project({
  name = "",
  imageUrl = "",
  briefSummary = "",
}: ProjectProps) {
  const [currentBreakpoint, setCurrentBreakpoint] = useState("");

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    setCurrentBreakpoint(detectBootstrapBreakpoint());
  }, []);

  const handleResize = () => {
    setCurrentBreakpoint(detectBootstrapBreakpoint());
  };

  return (
    <div className="row gx-5 gy-2 mb-5 mt-3 project">
      <div className="col-md-6 project-img-container">
        <img
          src={imageUrl}
          className="project-image w-100 border border-1 rounded-3"
          alt=""
        />
      </div>
      <div
        className={cx(
          "col-md-6 project-description",
          ["sm", "xs"].includes(currentBreakpoint) ? "text-center" : "",
        )}
      >
        <div className="fs-2 fw-medium mb-2 project-name">{name}</div>
        <p
          className={cx(
            "text-justify",
            ["sm", "xs"].includes(currentBreakpoint) ? "fs-6" : "fs-4",
          )}
        >
          {briefSummary}
        </p>
        <DefaultLinkButton
          href={"/project-details/" + name}
          label={"Learn More"}
        />
      </div>
    </div>
  );
}
