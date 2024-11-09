export interface Project {
    name: string;
    image: string;
    link?: string;
    briefSummary: string;
    description: string[];
    tools: string[];
}

export const socialLinks = [
    {
        name: 'Linked in',
        iconClassName: 'bi-linkedin',
        link: 'https://www.linkedin.com/in/sutej-pal/'
    },
    {
        name: 'GitHub',
        iconClassName: 'bi-github',
        link: 'https://github.com/sutej-pal/'
    },
    {
        name: 'Twitter',
        iconClassName: 'bi-twitter',
        link: 'https://twitter.com/Sutej_Master'
    },
]

export const projects: Project[] = [
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
        "briefSummary": "HFCL is a leading global technology company connecting billions of people, devices, and systems. For over 30 years, we have driven business transformations by harnessing the power of connectivity. We design, integrate, and deliver next-gen technology products and solutions. We believe in fostering innovation and collaborating with global partners to deliver accessible data network solutions to everyone.",
        "description": [
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
        ],
        "tools": ['Angular', 'SCSS', 'Bootstrap']
    },
    {
        "name": "Portfolio",
        "image": "/images/website-preview.png",
        "link": "https://my-portfolio-imoc.onrender.com",
        "briefSummary": "I have designed this portfolio as a template. In such a way that, with a few changes anyone can get their own.",
        "description": [
            "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc."
        ],
        "tools": ['Angular', 'SCSS', 'Bootstrap']
    },
    {
        "name": "Resume Builder",
        "image": "/images/resume-builder.png",
        "link": "https://resume-builder-n8yx.onrender.com",
        "briefSummary": "I have created a POC for a application dealing with creating and displaying dynamic PDF's.",
        "description": [
            "This is a POC for an application dealing with the creating and displaying dynamic PDF's. I have used <b>pdf-make</b> package in the back-end for creating PDF with dynamic data provided through the api and <b>react-pdf</b> on the front-end for displaying the PDF in the frontend. The idea behind using two different packages was to reduce the load from the front-end and execute all the exensive functions on the server."
        ],
        "tools": ['MERN', 'SCSS', 'Bootstrap', 'pdf-make', 'react-pdf', 'axios', 'validator']
    }
]
