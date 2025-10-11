// Variable global para llevar control del audio que está sonando
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

  // 🔹 Detiene cualquier otro reproductor activo
  const stopCurrentAudio = () => {
    if (currentAudio && currentAudio !== audio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
      if (currentPlayBtn) currentPlayBtn.textContent = "▶";
    }
  };

  // 🔹 Vincular barra de progreso al audio actual
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

  // Inicializar el primer audio
  attachProgress();

  // --- Play / Pause ---
  playBtn.addEventListener("click", () => {
    stopCurrentAudio(); // Detiene otro reproductor

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

  // --- Click en una canción específica ---
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

  // --- Botón siguiente ---
  nextBtn.addEventListener("click", () => {
    stopCurrentAudio();
    currentSongIndex = (currentSongIndex + 1) % songItems.length;
    songItems.forEach((item) => item.classList.remove("active"));
    songItems[currentSongIndex].classList.add("active");

    audio.pause();
    audio = new Audio(songItems[currentSongIndex].dataset.src);
    attachProgress(); // 🔥 Aquí conectamos la barra con el nuevo audio
    audio.play();

    playBtn.textContent = "⏸";
    isPlaying = true;
    currentAudio = audio;
    currentPlayBtn = playBtn;
  });

  // --- Botón anterior ---
  prevBtn.addEventListener("click", () => {
    stopCurrentAudio();
    currentSongIndex =
      (currentSongIndex - 1 + songItems.length) % songItems.length;
    songItems.forEach((item) => item.classList.remove("active"));
    songItems[currentSongIndex].classList.add("active");

    audio.pause();
    audio = new Audio(songItems[currentSongIndex].dataset.src);
    attachProgress(); // 🔥 También aquí
    audio.play();

    playBtn.textContent = "⏸";
    isPlaying = true;
    currentAudio = audio;
    currentPlayBtn = playBtn;
  });
});
