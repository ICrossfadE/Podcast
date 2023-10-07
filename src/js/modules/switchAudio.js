export function switchAudio(index, load, audioItem) {
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
    console.log("next", index);
  }

  function prev() {
    index--;
    if (index < 0) {
      index = audioItem.length - 1;
      console.log("ok");
    }

    load(audioItem[index]);
    console.log("prew", index);
  }

  audioBtnPrev.addEventListener("click", prev);
  audioBtnNext.addEventListener("click", next);

  navButtonPrev.addEventListener("click", prev);
  navButtonNext.addEventListener("click", next);
}
