export function loadIntroAudio() {
  const introAudioTime = document.querySelector(".intro-audio-time");
  const introAudioContent = document.querySelector(".intro-audio-content");

  introAudioContent.src = `./audio/Becca-Luna.mp3`;

  introAudioContent.addEventListener("loadeddata", (e) => {
    const { duration } = e.target;

    let durationMinutes = Math.floor(duration / 60);
    let durationSeconds = Math.floor(duration - durationMinutes * 60);

    // add zero for time
    if (durationSeconds < 10) durationSeconds = "0" + durationSeconds;

    introAudioTime.innerHTML = `Desert - ${durationMinutes}:${durationSeconds}`;
  });
}
