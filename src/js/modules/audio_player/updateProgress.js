export function updateProgress(audio, updateLine) {
  const progressContainer = document.querySelector(".progress-wrapper");
  let isDragging = false;

  function setProgressTimeline(e) {
    if (isDragging) {
      const width = this.clientWidth;
      const clickX = e.clientX - this.getBoundingClientRect().left;
      const duration = audio.duration;

      audio.currentTime = (clickX / width) * duration;
    }
  }

  function startDragging(e) {
    isDragging = true;
    setProgressTimeline.call(progressContainer, e);

    progressContainer.addEventListener("mousemove", setProgressTimeline);
    progressContainer.addEventListener("mouseup", stopDragging);
  }

  function stopDragging() {
    isDragging = false;
    progressContainer.removeEventListener("mousemove", setProgressTimeline);
    progressContainer.removeEventListener("mouseup", stopDragging);
  }

  progressContainer.addEventListener("mousedown", startDragging);
  audio.addEventListener("timeupdate", updateLine);
}
