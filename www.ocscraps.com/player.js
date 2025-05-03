const audio = document.getElementById('audio');
const trackList = document.querySelectorAll('#track-list li');
const cover = document.getElementById('album-cover');
const progress = document.getElementById('progress');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const shuffleBtn = document.getElementById('shuffle');
const loopBtn = document.getElementById('loop');

let currentTrack = 0;
let shuffledOrder = [];
let shuffleIndex = 0;
let isShuffling = false;

function loadTrack(index) {
  const track = trackList[index];
  audio.src = track.dataset.src;
  cover.src = track.dataset.cover;
  currentTrack = index;
  audio.play();
}

trackList.forEach((item, index) => {
  item.addEventListener('click', () => loadTrack(index));
});

audio.addEventListener('timeupdate', () => {
  if (audio.duration) {
    progress.value = (audio.currentTime / audio.duration) * 100;
  }
});

progress.addEventListener('input', () => {
  if (audio.duration) {
    audio.currentTime = (progress.value / 100) * audio.duration;
  }
});

playBtn.addEventListener('click', () => {
  if (audio.paused) audio.play();
  else audio.pause();
});

prevBtn.addEventListener('click', () => {
  let index = currentTrack - 1;
  if (index < 0) index = trackList.length - 1;
  loadTrack(index);
});

nextBtn.addEventListener("click", () => {
  if (isShuffling) {
    playNextShuffledTrack();
  } else {
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex);
    audio.play();
  }
});

function generateShuffledOrder() {
  shuffledOrder = [...Array(tracks.length).keys()];
  for (let i = shuffledOrder.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledOrder[i], shuffledOrder[j]] = [shuffledOrder[j], shuffledOrder[i]];
  }
  shuffleIndex = 0;
}

function playNextShuffledTrack() {
  if (shuffleIndex >= shuffledOrder.length) {
    generateShuffledOrder();
  }
  currentTrackIndex = shuffledOrder[shuffleIndex];
  shuffleIndex++;
  loadTrack(currentTrackIndex);
  audio.play();
}

loopBtn.addEventListener('click', () => {
  audio.loop = !audio.loop;
  loopBtn.style.background = audio.loop ? '#007acc' : '#333';
});

audio.addEventListener('ended', () => {
  if (!audio.loop) nextBtn.click();
});

// Load first track initially
loadTrack(0);
