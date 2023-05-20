import cx from "classnames";
import {useEffect, useState} from "react";
import {detectBootstrapBreakpoint} from "../helpers";

interface SectionSubHeadingProps {
    heading: string
}

export function SectionSubHeading({heading}: SectionSubHeadingProps) {

    const [currentBreakpoint, setCurrentBreakpoint] = useState('');

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        setCurrentBreakpoint(detectBootstrapBreakpoint());
    }, []);

    const handleResize = () => {
        setCurrentBreakpoint(detectBootstrapBreakpoint());
    };

    return (
        <div className="row mb-3">
            <div className="col-md-12 m-auto">
                <div className={cx('mb-4 text-center text-justify',
                    ['sm', 'xs'].includes(currentBreakpoint) ? 'fs-6' : 'fs-4'
                )}>
                    {heading}
                </div>
            </div>
        </div>
    )
}
