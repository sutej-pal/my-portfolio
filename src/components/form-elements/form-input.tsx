import { FormErrorList } from "./form-error-list";
import { useEffect, useState } from "react";
import { detectBootstrapBreakpoint } from "../../helpers";
import cx from "classnames";

interface FormInputProps {
  label: string;
  type?: "text" | "email";
  placeholder?: string;
  value: string;
  onChange: (value: string) => void;
  errors?: string[];
}

export function FormInput({
  label = "",
  type = "text",
  placeholder = "",
  value = "",
  onChange = (value: string) => value,
  errors,
}: FormInputProps) {
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
        htmlFor="exampleFormControlInput1"
        className={cx(
          "form-label",
          ["xs", "sm"].includes(currentBreakpoint) ? "fs-6" : "fs-5",
        )}
      >
        {label}
      </label>
      <input
        type={type}
        className="bg-body-secondary form-control rounded-1"
        onChange={(e) => {
          onChange(e.target.value);
        }}
        value={value}
        required
        placeholder={placeholder}
      />
      <FormErrorList errors={errors} />
    </div>
  );
}
