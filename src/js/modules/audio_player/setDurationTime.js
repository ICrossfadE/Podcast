export function setDurationTime(audio) {
  const progressLine = document.querySelector(".progress-item-line");
  const durationTimeLine = document.querySelector(".total-item-duration");

  //   console.log(durationTimeLine);

  audio.addEventListener("loadeddata", (e) => {
    const { duration, currentTime } = e.target;

    let durationMinutes = Math.floor(duration / 60);
    let durationSeconds = Math.floor(duration - durationMinutes * 60);

    // add zero for time
    if (durationSeconds < 10) durationSeconds = "0" + durationSeconds;

    // max timeline
    progressLine.value = currentTime;

    //add time on HTML
    durationTimeLine.innerHTML = `${durationMinutes}:${durationSeconds}`;
    console.log(durationTimeLine);
  });
}
