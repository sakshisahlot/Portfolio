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
const showprojects = document.querySelectorAll(".hidden");

showButton.addEventListener("click", () => {
    showprojects.forEach((project) => {
        project.classList.toggle("hidden");
    });
    const isHidden = Array.from(showprojects).every((project) => project.classList.contains("hidden"));
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


const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});


document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const serviceID = 'service_eryrojr';
  const templateID = 'template_7ezzfzm';
  const templateParams = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      message: document.getElementById('message').value
  };

  emailjs.send(serviceID, templateID, templateParams)
      .then(response => {
          document.getElementById('responseMessage').textContent = 'Message sent successfully!';
          document.getElementById('responseMessage').style.color = 'white';
          document.getElementById('contactForm').reset();
      })
      .catch(error => {
          document.getElementById('responseMessage').textContent = `Failed to send message: ${error.text}`;
          document.getElementById('responseMessage').style.color = 'red';
      });
});

