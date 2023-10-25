export function updateProgress(audio) {
  let currentTimeLine = document.querySelector(".current-time");
  const progressLine = document.querySelector(".progress-line");
  const progressContainer = document.querySelector(".progress-wrapper");

  function updateTimeline(e) {
    const { duration, currentTime } = e.target;

    //audio time
    let currentMinutes = Math.floor(currentTime / 60);
    let currentSeconds = Math.floor(currentTime - currentMinutes * 60);

    // add zero
    if (currentSeconds < 10) currentSeconds = "0" + currentSeconds;

    //update timeline
    let progressPercent = 0;
    progressPercent = (currentTime / duration) * 100;
    progressLine.style.width = `${progressPercent}%`;

    currentTimeLine.innerHTML = `${currentMinutes}:${currentSeconds}`;
  }

  function setProgressTimeline(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
  }

  audio.addEventListener("timeupdate", updateTimeline);

  progressContainer.addEventListener("click", setProgressTimeline);
}
