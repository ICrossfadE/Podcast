export function switchAudio(index, load, audioItem) {
  const audioBtnNext = document.querySelector(".audio-btn-next");
  const audioBtnPrev = document.querySelector(".audio-btn-prev");
  const navButtonNext = document.querySelector(".next-track");
  const navButtonPrev = document.querySelector(".prev-track");
  const playIcon = document.querySelector(".ri-play-fill");

  function next() {
    index++;
    if (index > audioItem.length - 1) {
      index = 0;
    }

    load(audioItem[index]);

    if (playIcon.classList.contains("ri-pause-line")) {
      playIcon.classList.remove("ri-pause-line");
      playIcon.classList.add("ri-play-fill");
    }
  }

  function prev() {
    index--;
    if (index < 0) {
      index = audioItem.length - 1;
    }

    load(audioItem[index]);

    if (playIcon.classList.contains("ri-pause-fill")) {
      playIcon.classList.remove("ri-pause-line");
      playIcon.classList.add("ri-play-fill");
    }
  }

  audioBtnPrev.addEventListener("click", prev);
  audioBtnNext.addEventListener("click", next);
  navButtonPrev.addEventListener("click", prev);
  navButtonNext.addEventListener("click", next);
}
