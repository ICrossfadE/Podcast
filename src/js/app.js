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

const audioPlayButton = document.querySelector(".playpause-track");
const audioPlayIcon = document.querySelector(".ri-play-fill");
const introPlayButton = document.querySelector(".playpause");
const introPlayIcon = document.querySelectorAll(".ri-play-fill")[1];

const list = document.querySelector(".explore-more-list");

flsFunctions.isWebp();

state.data = await getData();

showNavbar();
clickNavbar(state.data, sortItems, renderItems, ItemElement, list);

window.addEventListener("load", () => {
  loadIntroAudio(introAudio);
  loadAudio(state.data[state.audioStartIndex], setVolume);

  renderItems(state.data, ItemElement, list);
});

playPauseAudio(state.isPlaying, audio, audioPlayButton, audioPlayIcon);
playPauseAudio(state.isPlaying, introAudio, introPlayButton, introPlayIcon);
switchAudio(state.audioStartIndex, loadAudio, state.data, audioPlayIcon);
updateProgress(audio);
