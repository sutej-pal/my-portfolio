import {SectionHeading} from "../../components/section-heading";
import classnames from "classnames";
import './contact.scss';
import {FormEvent, useEffect, useState} from "react";
import {Spinner} from "../../components/spinner";
import {detectBootstrapBreakpoint} from "../../helpers";

const cx = classnames;

export function Contact() {

    const controlClasses = 'bg-body-secondary form-control rounded-1'
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [isContactSuccess, setContactSuccess] = useState<boolean>(false);
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [message, setMessage] = useState<string>('');

    const [currentBreakpoint, setCurrentBreakpoint] = useState('');

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        setCurrentBreakpoint(detectBootstrapBreakpoint());
    }, []);


    const handleResize = () => {
        setCurrentBreakpoint(detectBootstrapBreakpoint());
    };


    const submit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            setIsLoading(true);
            setTimeout(() => {
                setContactSuccess(true);
                setIsLoading(false);
            }, 2000)
        } catch (e) {
            console.log(e);
        }
    }

    useEffect(() => {
        if (isContactSuccess) {
            setTimeout(() => {
                setContactSuccess(false);
            }, 4000);
        }
    }, [isContactSuccess])

    return (
        <section className="vh-100 custom-scroll section-padding" id="contact">
            <SectionHeading heading='Contact'/>
            <div className="row">
                <div className="col-sm-10 col-md-8 col-lg-6 col-xl-4 m-auto">
                    <div className="card shadow p-4 border-0 contact-form text-secondary">
                        <form>
                            <div className="mb-4">
                                <label htmlFor="exampleFormControlInput1" className="form-label">Name</label>
                                <input type="name" className={cx(controlClasses)}
                                       onChange={e => {
                                           setName(e.target.value);
                                       }}
                                       value={name}
                                       id="exampleFormControlInput1"
                                       placeholder="Enter you name"
                                       required/>
                                <div className="invalid-feedback">
                                    Please provide a valid city.
                                </div>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="exampleFormControlInput2" className="form-label">Email</label>
                                <input type="email" className={cx(controlClasses)}
                                       onChange={e => {
                                           setEmail(e.target.value);
                                       }}
                                       value={email}
                                       id="exampleFormControlInput2"
                                       placeholder="Enter you email"/>
                            </div>
                            <div className="mb-4">
                                <label htmlFor="exampleFormControlTextarea1" className="form-label">Message</label>
                                <textarea className={cx(controlClasses)} placeholder="Enter your message"
                                          onChange={e => {
                                              setMessage(e.target.value);
                                          }}
                                          value={message}
                                          id="exampleFormControlTextarea1" rows={7}/>
                            </div>
                            <div className={cx(
                                'my-3 text-end',
                                ['md', 'sm', 'xs'].includes(currentBreakpoint) ? 'text-center': ''
                            )}>
                                <button type="submit" onClick={submit}
                                        className="btn btn-lg fw-medium btn-secondary text-uppercase py-2 px-4">
                                    {isLoading ? <Spinner white/> : 'Submit'}
                                </button>
                            </div>
                            <div>
                                <div
                                    className={
                                        cx(
                                            'success-response text-success fs-6 text-center',
                                            isContactSuccess ? 'show-success-response' : 'hide-success-response'
                                        )}>
                                    Thanks for contacting, I will get back to you as soon as possible.
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
