export function playPauseAudioIntro(playing) {
  const navButtonPlayIntro = document.querySelector(".playpause");
  const navButtonPlayIcon = document.querySelectorAll(".ri-play-fill")[1];
  const audio = document.querySelector(".intro-audio-content");
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

  navButtonPlayIntro.addEventListener("click", () => {
    audioState ? pauseTrack() : playTrack();
  });
}
