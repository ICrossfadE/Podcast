import * as flsFunctions from "./modules/isWebp.js";
import data from "../js/data/podcast-list.json";
import { showNavbar } from "./modules/showNavbar.js";
import { loadAudio } from "./modules/loadAudio.js";
import { loadIntroAudio } from "./modules/loadIntroAudio.js";
import { playPauseAudio } from "./modules/playPauseAudio.js";
import { playPauseAudioIntro } from "./modules/playPauseAudioIntro.js";
import { switchAudio } from "./modules/switchAudio.js";
import { updateProgress } from "./modules/updateProgress.js";
import { setVolume } from "./modules/setVolume.js";
import { state } from "./modules/state.js";

flsFunctions.isWebp();

showNavbar();

window.addEventListener("load", () => {
  loadIntroAudio();
  loadAudio(data[state.audioIndex], setVolume);
});

playPauseAudio(state.isPlaying);
playPauseAudioIntro(state.isPlayingIntro);
switchAudio(state.audioIndex, loadAudio, data);
updateProgress();
