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
            <div class="current-time">0:00</div>
            <div class="progress-wrapper">
                <div class="progress-line"></div>
            </div>
            <div class="total-duration">0:00</div>
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
    console.log(this.title);
    this.parent.append(listItem);
  }
}

export { ItemElement };
