window.addEventListener("scroll", function () {

    let navbar = document.querySelector("nav");

    if (window.scrollY > 50) {
        navbar.style.backgroundColor = "#0066ff";
    } else {
        navbar.style.backgroundColor = "#333";
    }

});