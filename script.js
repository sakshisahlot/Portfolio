var animation = lottie.loadAnimation({
    container: document.getElementById('lottie'), // the DOM element to render the animation
    renderer: 'svg', // the rendering type (svg/canvas/html)
    loop: true, // whether the animation should loop
    autoplay: true, // whether the animation should start automatically
    path: 'json/animationJSON.json' // the path to the animation json
});
  