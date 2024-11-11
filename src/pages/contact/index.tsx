import { SectionHeading } from "../../components/section-heading";
import classnames from "classnames";
import "./contact.scss";
import { Spinner } from "../../components/spinner";
import { detectBootstrapBreakpoint } from "../../helpers";
import isEmail from "validator/lib/isEmail";
import { Simulate } from "react-dom/test-utils";
import error = Simulate.error;
import { FormErrorList } from "../../components/form-elements/form-error-list";
import { FormInput } from "../../components/form-elements/form-input";
import { FormTextarea } from "../../components/form-elements/form-textarea";
import { saveContactRequest } from "./contact.api.helper";
import { useState, useRef, useEffect, FormEvent } from "react";

const cx = classnames;

export function Contact() {
  const controlClasses = "bg-body-secondary form-control rounded-1";
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isContactSuccess, setContactSuccess] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [errors, setErrors] = useState<any>({
    name: [],
    email: [],
    message: [],
  });

  const [currentBreakpoint, setCurrentBreakpoint] = useState("");
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    setCurrentBreakpoint(detectBootstrapBreakpoint());
  }, []);

  const handleResize = () => {
    setCurrentBreakpoint(detectBootstrapBreakpoint());
  };

  const submit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      setIsFormSubmitted(true);
      if (!isFormDataValid()) {
        return;
      }
      setIsLoading(true);
      // @ts-ignore
      formRef.current.style.maxHeight = formRef.current.clientHeight;
      const request = { name, email, message };
      const response = await saveContactRequest(request);
      console.log("response => ", response);
      if (response.message === "contact saved") {
        setContactSuccess(true);
        setIsLoading(false);
        clearForm();
      }
    } catch (e) {
      console.log(e);
      setIsLoading(false);
    }
  };

  const clearForm = () => {
    setIsFormSubmitted(false);
    if (formRef && formRef?.current) {
      const curEl = formRef?.current as HTMLFormElement;
      curEl.reset();
    }
    setName("");
    setEmail("");
    setMessage("");
  };

  const isFormDataValid = () => {
    let isValid = true;
    let err = {};
    if (name.trim() === "") {
      err = { ...err, ...{ name: ["Name is required."] } };
      isValid = false;
    }
    if (email.trim() === "") {
      err = { ...err, ...{ email: ["Mail is required."] } };
      isValid = false;
    } else if (!isEmail(email)) {
      err = { ...err, ...{ email: ["Please enter a valid mail address."] } };
      isValid = false;
    }
    if (message.trim() === "") {
      err = { ...err, ...{ message: ["Message is required."] } };
      isValid = false;
    }
    setErrors(err);
    return isValid;
  };

  // check animation for success message before changing

  useEffect(() => {
    if (isContactSuccess) {
      setTimeout(() => {
        setContactSuccess(false);
      }, 3500);
    }
  }, [isContactSuccess]);

  return (
    <section className="custom-scroll section-padding" id="contact">
      <SectionHeading heading="Contact" />
      <div className="row">
        <div className="col-sm-10 col-md-8 col-lg-6 col-xl-4 m-auto">
          <div className="card shadow p-4 border-0 contact-form text-secondary mb-5">
            <form
              className={cx(
                isFormSubmitted ? "was-validated" : "",
                isContactSuccess ? "temp form-height" : "",
              )}
              ref={formRef}
            >
              <FormInput
                onChange={setName}
                value={name}
                label="Name"
                placeholder="Enter you name"
                errors={errors?.name}
              />
              <FormInput
                onChange={setEmail}
                type="email"
                value={email}
                label="Email"
                placeholder="Enter you email"
                errors={errors?.email}
              />
              <FormTextarea
                label="Message"
                onChange={setMessage}
                value={message}
                placeholder="Enter your Message"
              />
              <div
                className={cx(
                  "my-3 text-end",
                  ["md", "sm", "xs"].includes(currentBreakpoint)
                    ? "text-center"
                    : "",
                )}
              >
                <button
                  type="submit"
                  onClick={submit}
                  className="btn btn-lg fw-medium btn-secondary text-uppercase py-2 px-4"
                >
                  {isLoading ? <Spinner white /> : "Submit"}
                </button>
              </div>
              <div
                className={cx(
                  "success-response text-success fs-5 text-center py-2",
                  isContactSuccess
                    ? "show-success-response"
                    : "visually-hidden",
                )}
              >
                Thanks for contacting. <br /> I will get back to you as soon as
                possible.
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
