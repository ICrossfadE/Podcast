import * as flsFunctions from "./modules/isWebp.js";
import { getData } from "./modules/getData.js";
import { showNavbar } from "./modules/showNavbar.js";
import { loadAudio } from "./modules/audio_player/loadAudio.js";
import { loadIntroAudio } from "./modules/audio_player/loadIntroAudio.js";
import { playPauseAudio } from "./modules/audio_player/playPauseAudio.js";
import { switchAudio } from "./modules/audio_player/switchAudio.js";
import { updateProgress } from "./modules/audio_player/updateProgress.js";
import { setDurationTime } from "./modules/audio_player/setDurationTime.js";
import { setVolume } from "./modules/audio_player/setVolume.js";
import { state } from "./modules/audio_player/state.js";

import { ItemElement } from "./modules/items_audio/itemCreate.js";
import { renderItems } from "./modules/items_audio/renderItems.js";
import { sortItems } from "./modules/sortItems.js";

import { clickNavbar } from "./modules/clickNavbar.js";

const audio = document.querySelector(".audio-content");
const introAudio = document.querySelector(".intro-audio-content");

const playerContainer = document.querySelector(".audio-player__container");
const popularContainer = document.querySelector(".popular__container");

const list = document.querySelector(".explore-more-list");

// Очікувати завантаження сторінки
document.addEventListener("DOMContentLoaded", async function () {
  try {
    // Отримати дані з функції getData
    state.data = await getData();

    updatePageContent();
  } catch (error) {
    console.error("Помилка:", error);
  }

  function updatePageContent() {
    flsFunctions.isWebp();

    showNavbar();
    clickNavbar(state.data, sortItems, renderItems, ItemElement, list);

    window.addEventListener("load", () => {
      loadIntroAudio(introAudio);
      loadAudio(state.data[state.audioStartIndex], setVolume);

      renderItems(state.data, ItemElement, list);
    });

    playPauseAudio(state.isPlaying, audio, playerContainer);
    playPauseAudio(state.isPlaying, introAudio, popularContainer);
    switchAudio(state.audioStartIndex, loadAudio, state.data);
    updateProgress(audio);
  }
});
