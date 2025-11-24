let currentAudio = null;
let currentPlayBtn = null;

document.querySelectorAll(".spotify-wrapper").forEach((wrapper) => {
  const playBtn = wrapper.querySelector(".play-btn");
  const prevBtn = wrapper.querySelector(".prev-btn");
  const nextBtn = wrapper.querySelector(".next-btn");
  const progressBar = wrapper.querySelector(".progress");
  const songItems = wrapper.querySelectorAll(".spotify-list li");

  let currentSongIndex = 0;
  let isPlaying = false;
  let audio = new Audio(songItems[currentSongIndex].dataset.src);

  const stopCurrentAudio = () => {
    if (currentAudio && currentAudio !== audio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
      if (currentPlayBtn) currentPlayBtn.textContent = "▶";
    }
  };

  const attachProgress = () => {
    audio.addEventListener("timeupdate", () => {
      const progressPercent = (audio.currentTime / audio.duration) * 100;
      progressBar.style.width = `${progressPercent}%`;
    });

    audio.addEventListener("ended", () => {
      playBtn.textContent = "▶";
      isPlaying = false;
      progressBar.style.width = "0%";
      currentAudio = null;
      currentPlayBtn = null;
    });
  };

  attachProgress();

  playBtn.addEventListener("click", () => {
    stopCurrentAudio();

    if (!isPlaying) {
      audio.play();
      playBtn.textContent = "⏸";
      isPlaying = true;
      currentAudio = audio;
      currentPlayBtn = playBtn;
    } else {
      audio.pause();
      playBtn.textContent = "▶";
      isPlaying = false;
      currentAudio = null;
      currentPlayBtn = null;
    }
  });

  songItems.forEach((li, index) => {
    li.addEventListener("click", () => {
      stopCurrentAudio();
      songItems.forEach((item) => item.classList.remove("active"));
      li.classList.add("active");

      audio.pause();
      audio = new Audio(li.dataset.src);
      currentSongIndex = index;
      attachProgress();
      audio.play();

      playBtn.textContent = "⏸";
      isPlaying = true;
      currentAudio = audio;
      currentPlayBtn = playBtn;
    });
  });

  nextBtn.addEventListener("click", () => {
    stopCurrentAudio();
    currentSongIndex = (currentSongIndex + 1) % songItems.length;
    songItems.forEach((item) => item.classList.remove("active"));
    songItems[currentSongIndex].classList.add("active");

    audio.pause();
    audio = new Audio(songItems[currentSongIndex].dataset.src);
    attachProgress();
    audio.play();

    playBtn.textContent = "⏸";
    isPlaying = true;
    currentAudio = audio;
    currentPlayBtn = playBtn;
  });

  prevBtn.addEventListener("click", () => {
    stopCurrentAudio();
    currentSongIndex =
      (currentSongIndex - 1 + songItems.length) % songItems.length;
    songItems.forEach((item) => item.classList.remove("active"));
    songItems[currentSongIndex].classList.add("active");

    audio.pause();
    audio = new Audio(songItems[currentSongIndex].dataset.src);
    attachProgress();
    audio.play();

    playBtn.textContent = "⏸";
    isPlaying = true;
    currentAudio = audio;
    currentPlayBtn = playBtn;
  });
});
