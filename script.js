const educationAnimation = lottie.loadAnimation({
    container: document.getElementById('educationLottie'), // the DOM element to render the animation
    renderer: 'svg', // the rendering type (svg/canvas/html)
    loop: true, // whether the animation should loop
    autoplay: true, // whether the animation should start automatically
    path: 'json/educationAnimation.json' // the path to the animation json
});
  

const experienceAnimation = lottie.loadAnimation({
    container: document.getElementById('experienceLottie'), // the DOM element to render the animation
    renderer: 'svg', // the rendering type (svg/canvas/html)
    loop: true, // whether the animation should loop
    autoplay: true, // whether the animation should start automatically
    path: 'json/experienceAnimation.json' // the path to the animation json
});

const showButton = document.querySelector("#showButton");
const showprojects = document.querySelectorAll(".show");

showButton.addEventListener("click", () => {
    showprojects.forEach((project) => {
        project.classList.toggle("show");
    });
    const isHidden = Array.from(showprojects).every((project) => project.classList.contains("show"));
    showButton.textContent = isHidden ? 'Load More Projects' : 'Hide Projects';
});

document.addEventListener('DOMContentLoaded', () => {
    const projectBox = document.querySelector('.project-box');
    const overlay = document.querySelector('.overlay');

    projectBox.addEventListener('mouseenter', () => {
        overlay.style.opacity = '1';
    });

    projectBox.addEventListener('mouseleave', () => {
        overlay.style.opacity = '0';
    });
});
