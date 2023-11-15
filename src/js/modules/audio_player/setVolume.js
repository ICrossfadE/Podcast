export function setVolume(audio, volumeSlider) {
  return (audio.volume = volumeSlider.value / 100);
}
