import * as flsFunctions from "./modules/isWebp.js";
import data from "./data/podcast-list.json";
import { showNavbar } from "./modules/showNavbar.js";
import { mainAudioPlayer } from "./modules/mainAudioPlayer.js";
import { loadAudio } from "./modules/loadAudio.js";
import { playPauseAudio } from "./modules/playAudio.js";
import { switchAudio } from "./modules/switchAudio.js";
import { updateProgress } from "./modules/updateProgress.js";

flsFunctions.isWebp();

showNavbar();

let audioIndex = 9;
let isPlaying = false;
let isRandom = false;

window.addEventListener("load", () => {
  loadAudio(data[audioIndex]);
});

playPauseAudio(isPlaying, updateProgress);
switchAudio(audioIndex, loadAudio, data);
updateProgress();
