export function playPauseAudio(playing, audio, parent) {
  const playButton = parent.querySelector(".playpause-track");
  const playIcon = parent.querySelector(".ri-play-fill");
  let audioState = playing;

  function playTrack() {
    audio.play();
    audioState = true;
    if (playIcon.classList.contains("ri-play-fill")) {
      playIcon.classList.toggle("ri-play-fill");
      playIcon.classList.toggle("ri-pause-line");
    }
  }
  function pauseTrack() {
    audio.pause();
    audioState = false;

    if (playIcon.classList.contains("ri-pause-line")) {
      playIcon.classList.toggle("ri-play-fill");
      playIcon.classList.toggle("ri-pause-line");
    }
  }

  playButton.addEventListener("click", () => {
    audioState ? pauseTrack() : playTrack();
  });
}
