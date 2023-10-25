export function switchAudio(index, load, audioItem, iconBtn) {
  const audioBtnNext = document.querySelector(".audio-btn-next");
  const audioBtnPrev = document.querySelector(".audio-btn-prev");
  const navButtonNext = document.querySelector(".next-track");
  const navButtonPrev = document.querySelector(".prev-track");

  function next() {
    index++;
    if (index > audioItem.length - 1) {
      index = 0;
    }

    load(audioItem[index]);

    if (iconBtn.classList.contains("ri-pause-line")) {
      iconBtn.classList.remove("ri-pause-line");
      iconBtn.classList.add("ri-play-fill");
    }
  }

  function prev() {
    index--;
    if (index < 0) {
      index = audioItem.length - 1;
    }

    load(audioItem[index]);

    if (iconBtn.classList.contains("ri-pause-fill")) {
      iconBtn.classList.remove("ri-pause-line");
      iconBtn.classList.add("ri-play-fill");
    }
  }

  audioBtnPrev.addEventListener("click", prev);
  audioBtnNext.addEventListener("click", next);
  navButtonPrev.addEventListener("click", prev);
  navButtonNext.addEventListener("click", next);
}
