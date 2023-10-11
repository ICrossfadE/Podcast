export function loadAudio(audioItem, volumeSlider) {
  const audioImages = document.querySelector(".audio-player-art").children[0];
  const audioAuthor = document.querySelector(".audio-author");
  const audioTheme = document.querySelector(".audio-theme");
  const audioEpisode = document.querySelector(".audio-episode");
  const audioContent = document.querySelector(".audio-content");
  const audionTime = document.querySelector(".audio-time");

  const audioVolumeSlider = document.querySelector(".volume-slider");

  const progressLine = document.querySelector(".progress-line");

  const durationTimeLine = document.querySelector(".total-duration");

  audioImages.src = `@img/img/author/${audioItem.details.img}.jpg`;
  audioAuthor.innerHTML = audioItem.details.author;
  audioTheme.innerHTML = audioItem.details.title;
  audioEpisode.innerHTML = `Episode ${audioItem.details.episode} - Season ${audioItem.details.season}`;
  audioContent.src = `./audio/${audioItem.details.audioSrc}.mp3`;

  audioContent.addEventListener("loadeddata", (e) => {
    const { duration, currentTime } = e.target;

    let durationMinutes = Math.floor(duration / 60);
    let durationSeconds = Math.floor(duration - durationMinutes * 60);

    // add zero for time
    if (durationSeconds < 10) durationSeconds = "0" + durationSeconds;

    // max timeline
    progressLine.value = currentTime;

    //add time on HTML
    audionTime.innerHTML = `${durationMinutes}:${durationSeconds}`;
    durationTimeLine.innerHTML = `${durationMinutes}:${durationSeconds}`;

    audioVolumeSlider.addEventListener("input", () => {
      volumeSlider(audioContent, audioVolumeSlider);
    });
  });
}
