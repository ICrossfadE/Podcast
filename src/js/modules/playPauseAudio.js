export function playPauseAudio(playing, audio, playBtn, iconBtn) {
  let audioState = playing;

  function playTrack() {
    audio.play();
    audioState = true;
    if (iconBtn.classList.contains("ri-play-fill")) {
      iconBtn.classList.toggle("ri-play-fill");
      iconBtn.classList.toggle("ri-pause-line");
    }
  }
  function pauseTrack() {
    audio.pause();
    audioState = false;

    if (iconBtn.classList.contains("ri-pause-line")) {
      iconBtn.classList.toggle("ri-play-fill");
      iconBtn.classList.toggle("ri-pause-line");
    }
  }

  playBtn.addEventListener("click", () => {
    audioState ? pauseTrack() : playTrack();
  });
}
