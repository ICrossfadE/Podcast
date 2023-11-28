export async function loadAudio(audioItem, setVolume, muteVolume) {
  const audioImages = document.querySelector(".audio-player-art").children[0];
  const audioAuthor = document.querySelector(".audio-author");
  const audioTheme = document.querySelector(".audio-theme");
  const audioEpisode = document.querySelector(".audio-episode");
  const audioContent = document.querySelector(".audio-content");
  const audionTime = document.querySelector(".audio-time");

  const audioVolumeSlider = document.querySelector(".volume-slider");
  const volumeIcon = document.querySelector("#volume-icon");
  const progressLine = document.querySelector(".progress-line");
  const durationTimeLine = document.querySelector(".total-duration");

  audioImages.src = `./img/img/author/${audioItem.details.img}.webp`;
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

    let inputValue = audioVolumeSlider.value / 100;

    function handlerValue(value) {
      return value;
    }

    audioVolumeSlider.addEventListener("input", () => {
      // console.log("Перед викликом setVolume: ", setVolume);
      let beforeValue;
      beforeValue = setVolume(audioContent, audioVolumeSlider);
      // console.log("Після виклику setVolume: ", beforeValue);

      inputValue = handlerValue(beforeValue);

      if (volumeIcon.classList.contains("ri-volume-mute-fill")) {
        volumeIcon.classList.toggle("ri-volume-mute-fill");
        volumeIcon.classList.toggle("ri-volume-up-fill");
      }
    });

    volumeIcon.addEventListener("click", () => {
      muteVolume(volumeIcon, audioContent, audioVolumeSlider, inputValue);
    });
  });
}
