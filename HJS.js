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

document.getElementById('loginbutton').onclick=function(){
    window.location.href='LoginPage.html';
};
document.getElementById('signupbutton').onclick = function () {
    window.location.href = 'signuppage.html';
};