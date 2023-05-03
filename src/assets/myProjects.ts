export interface Project {
    name: string;
    image: string;
    briefSummary: string;
    description: string[];
    tools: string[];
}

export const MyProjects: Project[] = [
    {
        "name": "Pal's Parking",
        "image": "/images/hihfs.png",
        "briefSummary": "Pal's parking is platform for booking parking ticket for the various location." +
            "We can save out preferences like type of parking and payment methods and review our profile.",
        "description": [
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
        ],
        "tools": ['MERN Stack', 'Google Maps', 'Google Location Service', 'Angular Material']
    },
    {
        "name": "HFCL",
        "image": "/images/hfcl.png",
        "briefSummary": "HFCL is a leading global technology company connecting billions of people, devices, and systems." +
            " For over 30 years, we have driven business transformations by harnessing the power of connectivity." +
            " We design, integrate, and deliver next-gen technology products and solutions." +
            " We believe in fostering innovation and collaborating with global partners to deliver accessible data network solutions to everyone.",
        "description": [
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
        ],
        "tools": ['Angular', 'SCSS', 'Bootstrap']
    }
]
