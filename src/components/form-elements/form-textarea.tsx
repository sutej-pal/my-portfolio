import { FormErrorList } from "./form-error-list";
import { useEffect, useState } from "react";
import { detectBootstrapBreakpoint } from "../../helpers";
import cx from "classnames";

interface FormTextareaProps {
  label: string;
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  errors?: string[];
}

export function FormTextarea({
  label = "",
  placeholder = "",
  value = "",
  onChange = (value: string) => value,
  errors,
}: FormTextareaProps) {
  const [currentBreakpoint, setCurrentBreakpoint] = useState("");

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    setCurrentBreakpoint(detectBootstrapBreakpoint());
  }, []);

  const handleResize = () => {
    setCurrentBreakpoint(detectBootstrapBreakpoint());
  };

  return (
    <div className="mb-4">
      <label
        htmlFor="exampleFormControlTextarea1"
        className={cx(
          "form-label",
          ["xs", "sm"].includes(currentBreakpoint) ? "fs-6" : "fs-5",
        )}
      >
        {label}
      </label>
      <textarea
        className="bg-body-secondary form-control rounded-1"
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
        value={value}
        required
        id="exampleFormControlTextarea1"
        rows={7}
      />
      <FormErrorList errors={errors} />
    </div>
  );
}
