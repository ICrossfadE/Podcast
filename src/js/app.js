import * as flsFunctions from "./modules/isWebp.js";
import data from "../js/data/podcast-list.json";
import { showNavbar } from "./modules/showNavbar.js";
import { loadAudio } from "./modules/loadAudio.js";
import { loadIntroAudio } from "./modules/loadIntroAudio.js";
import { playPauseAudio } from "./modules/playPauseAudio.js";
import { switchAudio } from "./modules/switchAudio.js";
import { updateProgress } from "./modules/updateProgress.js";
import { setVolume } from "./modules/setVolume.js";
import { state } from "./modules/state.js";

const audio = document.querySelector(".audio-content");
const introAudio = document.querySelector(".intro-audio-content");

const audioPlayButton = document.querySelector(".playpause-track");
const audioPlayIcon = document.querySelector(".ri-play-fill");
const introPlayButton = document.querySelector(".playpause");
const introPlayIcon = document.querySelectorAll(".ri-play-fill")[1];

flsFunctions.isWebp();

showNavbar();

window.addEventListener("load", () => {
  loadIntroAudio(introAudio);
  loadAudio(data[state.audioIndex], setVolume);
});

playPauseAudio(state.isPlaying, audio, audioPlayButton, audioPlayIcon);
playPauseAudio(state.isPlaying, introAudio, introPlayButton, introPlayIcon);
switchAudio(state.audioIndex, loadAudio, data);
updateProgress();
