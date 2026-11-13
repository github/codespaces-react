const flashlight = document.querySelector(".flashlight");

window.addEventListener("mousemove", function(event) {
    flashlight.style.background = `
        radial-gradient(
            circle 200px at ${event.clientX}px ${event.clientY}px,
            transparent 0%,
            rgba(0, 0, 0, 0.95) 100%
        )
    `;
});

console.log("JavaScript is working!");