interface SectionHeadingProps {
    heading: string
}

export function SectionHeading({heading}: SectionHeadingProps) {
    return (
        <div className="row">
            <div className="text-center">
                <div className="display-4 mb-3">
                    <div className="name text-primary text-uppercase fw-bold section-heading">
                        {heading}
                    </div>
                </div>
            </div>
        </div>
    )
}
