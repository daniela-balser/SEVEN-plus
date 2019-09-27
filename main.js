//// Blur handling

let blur = false;

let blurElements = elementsArray => {
    const filter = blur ? "blur(0px)" : "blur(5px)";
    for (let i = 0; i < elementsArray.length; ++i) {
        const element = bluredElements[i];
        element.style.filter = filter;
    }

    blur = !blur;
}

let bluredElements = document.querySelectorAll('.container-fluid, .blur');

const navToggle = document.getElementById('nav-toggle');

navToggle.addEventListener("click", () => {
    blurElements(bluredElements);
});
