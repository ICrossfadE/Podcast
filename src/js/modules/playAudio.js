export function playPauseAudio(playing) {
  const navButtonPlay = document.querySelector(".playpause-track");
  const navButtonPlayIcon = document.querySelector(".ri-play-fill");
  const audio = document.querySelector(".audio-content");
  let audioState = playing;

  function playTrack() {
    audio.play();
    audioState = true;
    if (navButtonPlayIcon.classList.contains("ri-play-fill")) {
      navButtonPlayIcon.classList.toggle("ri-play-fill");
      navButtonPlayIcon.classList.toggle("ri-pause-line");
    }
  }
  function pauseTrack() {
    audio.pause();
    audioState = false;

    if (navButtonPlayIcon.classList.contains("ri-pause-line")) {
      navButtonPlayIcon.classList.toggle("ri-play-fill");
      navButtonPlayIcon.classList.toggle("ri-pause-line");
    }
  }

  navButtonPlay.addEventListener("click", () => {
    audioState ? pauseTrack() : playTrack();
  });
}
