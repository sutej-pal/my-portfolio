import cx from "classnames";
import { useEffect, useRef, useState } from "react";
import { detectBootstrapBreakpoint } from "../helpers";

interface SectionSubHeadingProps {
  heading: string;
}

export function SectionSubHeading({ heading }: SectionSubHeadingProps) {
  const [currentBreakpoint, setCurrentBreakpoint] = useState("");
  const headingElement = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    setCurrentBreakpoint(detectBootstrapBreakpoint());
  }, []);

  useEffect(() => {
    updateTemplate(heading);
  }, [heading]);

  const updateTemplate = (heading: string) => {
    const element = headingElement.current;
    if (element && element.innerHTML) {
      element.innerHTML = heading;
    }
  };

  const handleResize = () => {
    setCurrentBreakpoint(detectBootstrapBreakpoint());
  };

  return (
    <div className="row mb-3">
      <div className="col-md-12 m-auto">
        <div
          className={cx(
            "mb-4 text-center text-justify",
            ["sm", "xs"].includes(currentBreakpoint) ? "fs-6" : "fs-4",
          )}
          ref={headingElement}
        >
          {heading}
        </div>
      </div>
    </div>
  );
}
