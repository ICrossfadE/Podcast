import * as flsFunctions from "./modules/isWebp.js";
import data from "../js/data/podcast-list.json";
import { showNavbar } from "./modules/showNavbar.js";
import { loadAudio } from "./modules/loadAudio.js";
import { playPauseAudio } from "./modules/playAudio.js";
import { switchAudio } from "./modules/switchAudio.js";
import { updateProgress } from "./modules/updateProgress.js";
import { setVolume } from "./modules/setVolume.js";

flsFunctions.isWebp();

showNavbar();

let audioIndex = 9;
let isPlaying = false;
// let isRandom = false;

window.addEventListener("load", () => {
  loadAudio(data[audioIndex], setVolume);
});

playPauseAudio(isPlaying);
switchAudio(audioIndex, loadAudio, data);
updateProgress();
