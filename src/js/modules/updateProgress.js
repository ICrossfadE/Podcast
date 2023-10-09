export function updateProgress() {
  let currentTimeLine = document.querySelector(".current-time");
  const progressLine = document.querySelector(".progress-slider");
  const audio = document.querySelector(".audio-content");

  audio.addEventListener("timeupdate", (e) => {
    const { duration, currentTime } = e.target;
    let seekPosition = 0;

    //audio time
    let currentMinutes = Math.floor(currentTime / 60);
    let currentSeconds = Math.floor(currentTime - currentMinutes * 60);

    // max timeline
    progressLine.max = duration;

    // add zero
    if (currentSeconds < 10) currentSeconds = "0" + currentSeconds;

    //update timeline
    seekPosition = currentTime * (100 / duration);
    progressLine.value = seekPosition;

    currentTimeLine.innerHTML = `${currentMinutes}:${currentSeconds}`;
  });
}
