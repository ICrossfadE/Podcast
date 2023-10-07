export function loadAudio(audioItem) {
  const audioImages = document.querySelector(".audio-player-art");
  const audioAuthor = document.querySelector(".audio-author");
  const audioTheme = document.querySelector(".audio-theme");
  const audioEpisode = document.querySelector(".audio-episode");

  audioAuthor.innerHTML = audioItem.details.author;
  audioTheme.innerHTML = audioItem.details.title;
  audioEpisode.innerHTML = `Episode ${audioItem.details.episode} - Season ${audioItem.details.season}`;
  //   audio Content -->

  console.log(audioItem);
}
