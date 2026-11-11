const links = document.querySelectorAll("a:not(.links)");
const jumpscare = document.getElementById("jumpscare");
const video = document.getElementById("scare-video");

links.forEach(link => {
    link.addEventListener("click", async function(event) {
        event.preventDefault();

        jumpscare.style.display = "block";
        video.currentTime = 0;

        try {
            await video.play();
        } catch (error) {
            console.error(error);
        }

        setTimeout(() => {
            video.pause();
            jumpscare.style.display = "none";
        }, 3000);
    });
});