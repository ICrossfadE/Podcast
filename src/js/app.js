import * as flsFunctions from "./modules/isWebp.js";
import { swiper } from "./modules/swiper.js";

import { state } from "./modules/audio_player/state.js";
import { getData } from "./modules/getData.js";

import { showNavbar } from "./modules/showNavbar.js";
import { addActive } from "./modules/addActive.js";

import { ItemElement } from "./modules/items_audio/itemCreate.js";
import { renderItems } from "./modules/items_audio/renderItems.js";
import { sortItems } from "./modules/sortItems.js";
import { clickNavbar } from "./modules/clickNavbar.js";

import { setVolume } from "./modules/audio_player/setVolume.js";
import { muteVolume } from "./modules/audio_player/muteVolume.js";
import { loadIntroAudio } from "./modules/audio_player/loadIntroAudio.js";
import { loadAudio } from "./modules/audio_player/loadAudio.js";

import { playPauseAudio } from "./modules/audio_player/playPauseAudio.js";
import { switchAudio } from "./modules/audio_player/switchAudio.js";

import { updateTimeline } from "./modules/audio_player/updateTimeLine.js";
import { updateProgress } from "./modules/audio_player/updateProgress.js";

import {
  monthSum,
  yearSum,
  monthDate,
  yearDate,
} from "./modules/switchRate/rateSum.js";
import { switchRate } from "./modules/switchRate/switchRate.js";

const audio = document.querySelector(".audio-content");
const introAudio = document.querySelector(".intro-audio-content");

const playerContainer = document.querySelector(".audio-player__container");
const popularContainer = document.querySelector(".popular__container");

const list = document.querySelector(".explore-more-list");
const parentRate = document.querySelector(".rate-list");
const rateElements = parentRate.querySelectorAll(".list-item");

const formButton = document.querySelector("#form-button");

formButton.addEventListener("click", (event) => {
  event.preventDefault();
});

document.addEventListener("DOMContentLoaded", async function () {
  try {
    state.data = await getData();

    flsFunctions.isWebp();

    showNavbar();
    clickNavbar(state.data, sortItems, renderItems, ItemElement, list);

    loadIntroAudio(introAudio);
    loadAudio(state.data[state.audioStartIndex], setVolume, muteVolume);
    renderItems(state.data, ItemElement, list, addActive);

    playPauseAudio(state.isPlaying, audio, playerContainer);
    playPauseAudio(state.isPlaying, introAudio, popularContainer);
    switchAudio(state.audioStartIndex, loadAudio, state.data);
    updateProgress(audio, updateTimeline);
    addActive(rateElements);
    switchRate(parentRate, monthSum, yearSum, monthDate, yearDate);
  } catch (error) {
    alert("Помилка при отриманні даних: " + error.message);
  }
});
