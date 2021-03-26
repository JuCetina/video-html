document.body.style.backgroundColor = "#c0392b";
document.body.style.height = "100vh";
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";

const app = document.getElementById('app');
app.style.display = "flex";
app.style.flexDirection = "column";
app.style.alignItems = "center";

const video = document.createElement('video');
video.src = './f8.mp4';
video.width = "500";
// Volumen
// 1.0 is highest volume (100%. This is default)
// 0.5 is half volume (50%)
// 0.0 is silent (same as mute)
video.volume = 0.5;
video.controls = true;

const onPlay = () => {
    video.play();
}

const onPause = () => {
    video.pause();
}

const onMute = () => {
    video.muted = true;
}

const onUnmute = () => {
    video.muted = false;
}

const container = document.createElement('div');
container.style.margin = "20px";

const playButton = document.createElement('button');
playButton.textContent = "Play";
playButton.addEventListener('click', onPlay);
container.appendChild(playButton);

const pauseButton = document.createElement('button');
pauseButton.textContent = "Pause";
pauseButton.addEventListener('click', onPause);
container.appendChild(pauseButton);

const muteButton = document.createElement('button');
muteButton.textContent = "Mute";
muteButton.addEventListener('click', onMute);
container.appendChild(muteButton);

const unmuteButton = document.createElement('button');
unmuteButton.textContent = "Unmute";
unmuteButton.addEventListener('click', onUnmute);
container.appendChild(unmuteButton);

app.appendChild(video);
app.appendChild(container);

const buttons = document.querySelectorAll('button');
const buttonsArray = [...buttons];
buttons.forEach(button => {
    button.style.padding = "5px 10px";
    button.style.margin = "5px";
    button.style.borderRadius = "5px";
});
console.log(buttonsArray);


