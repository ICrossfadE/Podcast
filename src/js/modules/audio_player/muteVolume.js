export function muteVolume(volumeIcon, audio, volumeSlider, beforeValue) {
  if (volumeIcon.classList.contains("ri-volume-up-fill")) {
    volumeIcon.classList.toggle("ri-volume-up-fill");
    volumeIcon.classList.toggle("ri-volume-mute-fill");
    audio.volume = 0;
    volumeSlider.value = 0;
  } else {
    volumeIcon.classList.toggle("ri-volume-mute-fill");
    volumeIcon.classList.toggle("ri-volume-up-fill");
    audio.volume = beforeValue;
    volumeSlider.value = beforeValue * 100;
  }
}
