document.querySelectorAll('.audio-player').forEach(player => {
  const audio = player.querySelector('.audio');
  const trackList = player.querySelectorAll('.track-list li');
  const cover = player.querySelector('.album-cover');
  const progress = player.querySelector('.progress');
  const playBtn = player.querySelector('.play');
  const prevBtn = player.querySelector('.prev');
  const nextBtn = player.querySelector('.next');
  const shuffleBtn = player.querySelector('.shuffle');
  const loopBtn = player.querySelector('.loop');
  const tracks = Array.from(trackList);

  let currentTrack = 0;
  let shuffledOrder = [];
  let shuffleIndex = 0;
  let isShuffling = false;

  function loadTrack(index) {
    const track = tracks[index];
    audio.src = track.dataset.src;
    cover.src = track.dataset.cover;
    currentTrack = index;
    audio.load();
    audio.play().catch(err => console.warn("Play failed:", err));
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
    if (index < 0) index = tracks.length - 1;
    loadTrack(index);
  });

  nextBtn.addEventListener('click', () => {
    if (isShuffling) {
      playNextShuffledTrack();
    } else {
      currentTrack = (currentTrack + 1) % tracks.length;
      loadTrack(currentTrack);
      audio.play();
    }
  });

  shuffleBtn.addEventListener('click', () => {
    isShuffling = !isShuffling;
    shuffleBtn.classList.toggle("active", isShuffling);
    shuffleBtn.style.background = isShuffling ? '#007acc' : '#333';
    if (isShuffling) generateShuffledOrder();
  });

  loopBtn.addEventListener('click', () => {
    audio.loop = !audio.loop;
    loopBtn.style.background = audio.loop ? '#007acc' : '#333';
  });

  audio.addEventListener('ended', () => {
    if (!audio.loop) nextBtn.click();
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
});
