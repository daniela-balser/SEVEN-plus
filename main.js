//// Blur handling

let blur = false;

const blurElements = elementsArray => {
    const filter = blur ? "blur(0px)" : "blur(5px)";
    for (let i = 0; i < elementsArray.length; ++i) {
        const element = bluredElements[i];
        element.style.filter = filter;
    }

    blur = !blur;
}

const bluredElements = document.querySelectorAll('.container-fluid, .blur');

const navToggle = document.getElementById('nav-toggle');

navToggle.addEventListener("click", () => {
    blurElements(bluredElements);
});


//// Wait for image loading before start page transition animation

const containerFluid = document.querySelectorAll('.box');

const heroImages = {
    '/index': 'images/hero-img5.png',
    '/what-we-do': 'images/iStock-493694230.jpg',
    '/how-we-do-it': 'images/iStock-513446326.jpg',
    '/who-we-are': 'images/iStock-939732198.jpg',
    '/contact-us': 'images/iStock-894464110.jpg',
    '/benefits': 'images/iStock-641194368.jpg',
}

const pageLocation = window.location.pathname.split('.')[0];

const image = new Image();

image.onload = () => {
    console.log('loaded');
    containerFluid.forEach(element => {
        console.log('works');
        element.style.display = 'block';
    });
};

image.src = heroImages[pageLocation];
