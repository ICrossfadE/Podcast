import * as flsFunctions from "./modules/isWebp.js";
import data from "./data/podcast-list.json";
import { showNavbar } from "./modules/showNavbar.js";
import { mainAudioPlayer } from "./modules/mainAudioPlayer.js";
import { loadAudio } from "./modules/loadAudio.js";
import { playPauseAudio } from "./modules/playAudio.js";
import { switchAudio } from "./modules/switchAudio.js";

flsFunctions.isWebp();

showNavbar();
// mainAudioPlayer();

let audioIndex = 9;
let isPlaying = false;
let isRandom = false;

loadAudio(data[audioIndex]);
playPauseAudio(isPlaying);
switchAudio(audioIndex, loadAudio, data);
