const handleScroll = () => {
    // Get current scroll position
    const scrollY = parseInt(window.scrollY.toString());

    const sections = document.querySelectorAll("section[id]");

    // Now we loop through sections to get height, top and ID values for each

    sections.forEach((current: any) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 120;
        const sectionId = current.getAttribute("id");

        /*
        - If our current scroll position enters the space where current section on screen is, add .active class to corresponding navigation link, else remove it
        - To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
        */
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(".navbar-nav a[href*=" + sectionId + "]")?.classList.add("active");
        } else {
            document.querySelector(".navbar-nav a[href*=" + sectionId + "]")?.classList.remove("active");
        }
    });
}

const detectBootstrapBreakpoint = () => {
    const breakPoints = {
        xs: 0,
        sm: 576,
        md: 768,
        lg: 992,
        xl: 1200,
        xxl: 1400
    }

    const width = window.innerWidth;
    let currentBreakpoint = '';

    if (breakPoints.xs <= width) {
        currentBreakpoint = 'xs';
    }
    if (breakPoints.sm <= width) {
        currentBreakpoint = 'sm';
    }
    if (breakPoints.md <= width) {
        currentBreakpoint = 'md';
    }
    if (breakPoints.lg <= width) {
        currentBreakpoint = 'lg';
    }
    return currentBreakpoint
}

export {
    handleScroll,
    detectBootstrapBreakpoint
}
