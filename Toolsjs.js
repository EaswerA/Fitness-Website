const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");

hamburger.addEventListener('click', () => {
    //Animate Links
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle("fade");
    });

    //Hamburger Animation
    hamburger.classList.toggle("toggle");
});

document.getElementById('loginbutton').onclick = function () {
    window.location.href = 'LoginPage.html';
};
document.getElementById('signupbutton').onclick = function () {
    window.location.href = 'signuppage.html';
};

const syncPointer = ({ x, y }) => {
    document.documentElement.style.setProperty('--x', x.toFixed(2))
    document.documentElement.style.setProperty(
        '--xp',
        (x / window.innerWidth).toFixed(2)
    )
    document.documentElement.style.setProperty('--y', y.toFixed(2))
    document.documentElement.style.setProperty(
        '--yp',
        (y / window.innerHeight).toFixed(2)
    )
}
document.body.addEventListener('pointermove', syncPointer)