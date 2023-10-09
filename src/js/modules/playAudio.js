export function playPauseAudio(playing) {
  const navButtonPlay = document.querySelector(".playpause-track");
  const navButtonPlayIcon = document.querySelector(".ri-play-fill");
  const audio = document.querySelector(".audio-content");
  let audioState = playing;

  let progressLine = document.querySelector(".progress-slider");

  function playTrack() {
    audio.play();
    audioState = true;
    navButtonPlayIcon.classList.toggle("ri-pause-line");
    navButtonPlayIcon.classList.toggle("ri-play-fill");
  }
  function pauseTrack() {
    audio.pause();
    audioState = false;
    navButtonPlayIcon.classList.toggle("ri-play-fill");
    navButtonPlayIcon.classList.toggle("ri-pause-line");
  }

  navButtonPlay.addEventListener("click", () => {
    audioState ? pauseTrack() : playTrack();
  });

  // progressLine.addEventListener("change", () => {
  //   audio.currentTime = progressLine.value;
  //   // playTrack();
  // });
}
