export function setVolume(audio, volumeSlider) {
  audio.volume = volumeSlider.value / 100;
}
