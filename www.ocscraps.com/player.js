const audio = document.getElementById('audio');
const trackList = document.querySelectorAll('#track-list li');
const cover = document.getElementById('album-cover');
const progress = document.getElementById('progress');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const shuffleBtn = document.getElementById('shuffle');
const loopBtn = document.getElementById('loop');
const tracks = Array.from(trackList);

let currentTrack = 0;
let shuffledOrder = [];
let shuffleIndex = 0;
let isShuffling = false;

const background = document.getElementById('background-gradient');
const colorThief = new ColorThief();

function loadTrack(index) {
  const track = trackList[index];
  const img = new Image();
  img.crossOrigin = "Anonymous"; // Needed if album cover is from another domain

  img.src = track.dataset.cover;
  img.onload = () => {
    // Get dominant color
    const color = colorThief.getColor(img);
    const gradient = `linear-gradient(135deg, rgb(${color[0]}, ${color[1]}, ${color[2]}) 0%, rgba(${color[0]}, ${color[1]}, ${color[2]}, 0.5) 100%)`;
    background.style.background = gradient;

    // Load the audio after color is ready
    audio.src = track.dataset.src;
    cover.src = img.src;
    currentTrack = index;
    audio.load();
    audio.play().catch(err => {
img.onerror = () => {
  background.style.background = 'linear-gradient(135deg, #222, #444)';
  audio.src = track.dataset.src;
  cover.src = 'fallback.jpg'; // optional fallback
  currentTrack = index;
  audio.load();
  audio.play().catch(err => {
    console.warn("Play failed:", err);
  });
};



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
    currentTrack = (currentTrack + 1) % tracks.length;
    loadTrack(currentTrack);
    audio.play();
  }
});

shuffleBtn.addEventListener("click", () => {
  isShuffling = !isShuffling;
  shuffleBtn.classList.toggle("active", isShuffling);
  if (isShuffling) generateShuffledOrder();
  shuffleBtn.style.background = isShuffling ? '#007acc' : '#333';
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
  currentTrack = shuffledOrder[shuffleIndex];
  shuffleIndex++;
  loadTrack(currentTrack);
  audio.play();
}

loopBtn.addEventListener('click', () => {
  audio.loop = !audio.loop;
  loopBtn.style.background = audio.loop ? '#007acc' : '#333';
});

audio.addEventListener('ended', () => {
  if (!audio.loop) nextBtn.click();
});
