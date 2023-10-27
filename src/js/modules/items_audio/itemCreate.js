class ItemElement {
  constructor(theme, title, episode, season, img, audioSrc, parent) {
    this.theme = theme;
    this.title = title;
    this.episode = episode;
    this.season = season;
    this.img = img;
    this.audioSrc = audioSrc;
    this.parent = parent;
  }

  render() {
    const listItem = document.createElement("div");
    listItem.classList.add("list-item");

    listItem.innerHTML = `
    <div class="item-audio-art">
        <img src="./img/img/author/${this.img}.jpg" alt="author" />
    </div>

    <div class="description">
        <p class="item-theme">${this.title}</p>
        <p class="item-episode">Episode ${this.episode} - Season ${this.season}</p>

        <div class="item-audio-timeline">
            <div class="current-item-time">0:00</div>
            <div class="progress-item-wrapper">
                <div class="progress-item-line"></div>
            </div>
            <div class="total-item-duration">0:00</div>
            </div>
            <audio class="item-audio-content" src="./audio/${this.audioSrc}.mp3"></audio>
        </div>

        <div class="item-navigation">
        <div class="playpause-track">
            <i class="ri-play-fill"></i>
        </div>
        <div class="next-track">
            <i class="ri-skip-right-fill"></i>
        </div>
    </div>
    `;
    this.parent.append(listItem);

    this.setDurationTime();
    this.playPause();
    this.updateProgress();
  }

  setDurationTime() {
    const listItem = this.parent.lastChild;

    const audio = listItem.querySelector(".item-audio-content");
    const progressLine = listItem.querySelector(".progress-item-line");
    const durationTimeLine = listItem.querySelector(".total-item-duration");

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
    });
  }

  playPause() {
    const listItem = this.parent.lastChild;

    const audio = listItem.querySelector(".item-audio-content");
    const playButton = listItem.querySelector(".playpause-track");
    const playIcon = listItem.querySelector(".ri-play-fill");

    let audioState = false;

    function playTrack() {
      audio.play();
      audioState = true;
      if (playIcon.classList.contains("ri-play-fill")) {
        playIcon.classList.toggle("ri-play-fill");
        playIcon.classList.toggle("ri-pause-line");
      }
    }
    function pauseTrack() {
      audio.pause();
      audioState = false;

      if (playIcon.classList.contains("ri-pause-line")) {
        playIcon.classList.toggle("ri-play-fill");
        playIcon.classList.toggle("ri-pause-line");
      }
    }

    playButton.addEventListener("click", () => {
      audioState ? pauseTrack() : playTrack();
    });
  }

  updateProgress() {
    const listItem = this.parent.lastChild;

    let currentTimeLine = listItem.querySelector(".current-item-time");
    const progressLine = listItem.querySelector(".progress-item-line");
    const progressContainer = listItem.querySelector(".progress-item-wrapper");
    const audio = listItem.querySelector(".item-audio-content");

    function updateTimeline(e) {
      const { duration, currentTime } = e.target;

      //audio time
      let currentMinutes = Math.floor(currentTime / 60);
      let currentSeconds = Math.floor(currentTime - currentMinutes * 60);

      // add zero
      if (currentSeconds < 10) currentSeconds = "0" + currentSeconds;

      //update timeline
      let progressPercent = 0;
      progressPercent = (currentTime / duration) * 100;
      progressLine.style.width = `${progressPercent}%`;

      currentTimeLine.innerHTML = `${currentMinutes}:${currentSeconds}`;
    }

    function setProgressTimeline(e) {
      const width = this.clientWidth;
      const clickX = e.offsetX;
      const duration = audio.duration;

      audio.currentTime = (clickX / width) * duration;
    }

    audio.addEventListener("timeupdate", updateTimeline);

    progressContainer.addEventListener("click", setProgressTimeline);
  }
}

export { ItemElement };
