export function loadAudio(audioItem) {
  const audioImages = document.querySelector(".audio-player-art").children[0];
  const audioAuthor = document.querySelector(".audio-author");
  const audioTheme = document.querySelector(".audio-theme");
  const audioEpisode = document.querySelector(".audio-episode");
  const audioContent = document.querySelector(".audio-content");

  audioImages.src = `../img/img/author/${audioItem.details.img}.jpg`;
  audioAuthor.innerHTML = audioItem.details.author;
  audioTheme.innerHTML = audioItem.details.title;
  audioEpisode.innerHTML = `Episode ${audioItem.details.episode} - Season ${audioItem.details.season}`;
  audioContent.src = `../audio/${audioItem.details.audioSrc}.mp3`;

  console.log(audioImages);
}