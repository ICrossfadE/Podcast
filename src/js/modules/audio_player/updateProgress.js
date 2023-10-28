export function updateProgress(audio, updateLine) {
  const progressContainer = document.querySelector(".progress-wrapper");

  function setProgressTimeline(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
  }

  audio.addEventListener("timeupdate", updateLine);

  progressContainer.addEventListener("click", setProgressTimeline);
}
