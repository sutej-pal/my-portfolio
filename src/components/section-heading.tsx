interface SectionHeadingProps {
    heading: string
}

export function SectionHeading({heading = ''}: SectionHeadingProps) {
    return (
        <div className="row">
            <div className="col-md-12 text-center mb-5">
                <div className="fs-1 text-primary text-uppercase fw-bold section-heading font-family-montserrat">
                    {heading}
                </div>
            </div>
        </div>
    )
}
