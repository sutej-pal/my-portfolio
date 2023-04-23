interface SectionHeadingProps {
    heading: string
}

export function SectionHeading({heading}: SectionHeadingProps) {
    return (
        <div className="row">
            <div className="text-center">
                <div className="fs-1 text-primary text-uppercase fw-bold section-heading">
                    {heading}
                </div>
            </div>
        </div>
    )
}
