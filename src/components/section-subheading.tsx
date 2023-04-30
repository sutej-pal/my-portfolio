interface SectionSubHeadingProps {
    heading: string
}

export function SectionSubHeading({heading}: SectionSubHeadingProps) {
    return (
        <div className="row mb-3">
            <div className="col-md-12 m-auto">
                <div className="mb-4 text-center section-subheading">
                    {heading}
                </div>
            </div>
        </div>
    )
}
