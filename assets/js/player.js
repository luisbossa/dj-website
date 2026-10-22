// Reproductor de audio. Cada .spotify-wrapper[data-mix] se construye a partir
// de window.DJ_MIXES (tracks.js). data-mix="all" junta todas las canciones.
// Solo un reproductor suena a la vez en toda la página.
(() => {
  const MIXES = window.DJ_MIXES || {};

  const ICONS = {
    play: "M8 5v14l11-7z",
    pause: "M6 5h4v14H6zM14 5h4v14h-4z",
    prev: "M6 12L18 4v16zM5 4h2v16H5z",
    next: "M6 4l12 8-12 8zM17 4h2v16h-2z",
  };

  const icon = (name) =>
    `<svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="${ICONS[name]}" /></svg>`;

  const formatTime = (secs) => {
    if (!Number.isFinite(secs)) return "0:00";
    const s = Math.floor(secs);
    return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
  };

  const withMixInfo = (mix) => mix.tracks.map((t) => ({ ...t, artist: mix.artist, cover: mix.cover }));

  const getPlaylist = (key) => {
    if (key === "all") {
      const mixes = Object.values(MIXES);
      return {
        title: "Todos los mixes",
        artist: "DJ Aler",
        cover: mixes[0]?.cover,
        tracks: mixes.flatMap(withMixInfo),
      };
    }
    const mix = MIXES[key];
    return mix && { ...mix, tracks: withMixInfo(mix) };
  };

  const controlsHTML = `
    <div class="spotify-buttons">
      <button type="button" class="prev-btn" aria-label="Anterior">${icon("prev")}</button>
      <button type="button" class="play-btn" aria-label="Reproducir">${icon("play")}</button>
      <button type="button" class="next-btn" aria-label="Siguiente">${icon("next")}</button>
    </div>`;

  const progressHTML = `
    <div class="spotify-controls">
      <span class="time-current">0:00</span>
      <div class="progress-bar" role="slider" tabindex="0" aria-label="Progreso" aria-valuemin="0" aria-valuemax="100" aria-valuenow="0">
        <div class="progress"></div>
      </div>
      <span class="time-total">0:00</span>
    </div>`;

  const trackHTML = (track, i, full) => `
    <li>
      <button type="button" class="song-btn">
        <span class="song-index">
          <span class="song-num">${String(i + 1).padStart(2, "0")}</span>
          <span class="song-eq" aria-hidden="true"><i></i><i></i><i></i></span>
        </span>
        ${full ? `<img class="song-thumb" src="${track.cover}" alt="" loading="lazy" />` : ""}
        <span class="song-meta">
          <span class="song-title">${track.title}</span>
          ${full ? `<span class="song-artist">${track.artist}</span>` : ""}
        </span>
        <span class="song-duration">${track.duration || ""}</span>
      </button>
    </li>`;

  const render = (wrapper, playlist, full) => {
    const list = `<ol class="spotify-list">${playlist.tracks.map((t, i) => trackHTML(t, i, full)).join("")}</ol>`;

    wrapper.innerHTML = full
      ? `
        <div class="player-now">
          <img class="player-now-cover" src="${playlist.cover}" alt="" />
          <div class="player-now-info">
            <span class="player-eyebrow">Sonando ahora</span>
            <h3 class="player-now-title"></h3>
            <p class="player-now-artist"></p>
          </div>
          ${controlsHTML}
          ${progressHTML}
        </div>
        <div class="player-list">
          <div class="player-list-head">
            <span>${playlist.tracks.length} canciones</span>
            <span>DJ Aler</span>
          </div>
          ${list}
        </div>`
      : `
        <div class="spotify-header">
          <img src="${playlist.cover}" alt="" class="spotify-cover" />
          <div class="spotify-info">
            <h4>${playlist.title}</h4>
            <p>${playlist.artist} · ${playlist.tracks.length} ${playlist.tracks.length === 1 ? "canción" : "canciones"}</p>
          </div>
          ${controlsHTML}
        </div>
        ${progressHTML}
        ${list}`;
  };

  let activePlayer = null;

  const createPlayer = (wrapper) => {
    const playlist = getPlaylist(wrapper.dataset.mix);
    if (!playlist || !playlist.tracks.length) return;

    const full = wrapper.classList.contains("spotify-wrapper--full");
    render(wrapper, playlist, full);

    const $ = (sel) => wrapper.querySelector(sel);
    const playBtn = $(".play-btn");
    const playIcon = playBtn.querySelector("path");
    const progressBar = $(".progress-bar");
    const progress = $(".progress");
    const timeCurrent = $(".time-current");
    const timeTotal = $(".time-total");
    const items = [...wrapper.querySelectorAll(".spotify-list li")];
    const nowCover = $(".player-now-cover");
    const nowTitle = $(".player-now-title");
    const nowArtist = $(".player-now-artist");

    const audio = new Audio();
    audio.preload = "none";
    let index = 0;
    const player = { pause: () => audio.pause() };

    const setProgress = (ratio) => {
      const pct = Math.min(100, Math.max(0, ratio * 100));
      progress.style.width = `${pct}%`;
      progressBar.setAttribute("aria-valuenow", Math.round(pct));
    };

    const setPlayingUI = (playing) => {
      playIcon.setAttribute("d", playing ? ICONS.pause : ICONS.play);
      playBtn.setAttribute("aria-label", playing ? "Pausar" : "Reproducir");
      wrapper.classList.toggle("is-playing", playing);
    };

    const select = (i) => {
      index = (i + items.length) % items.length;
      const track = playlist.tracks[index];
      items.forEach((li, n) => li.classList.toggle("active", n === index));
      timeCurrent.textContent = "0:00";
      timeTotal.textContent = track.duration || "0:00";
      setProgress(0);
      if (nowTitle) {
        nowCover.src = track.cover;
        nowTitle.textContent = track.title;
        nowArtist.textContent = track.artist;
      }
    };

    const play = () => {
      if (activePlayer && activePlayer !== player) activePlayer.pause();
      activePlayer = player;
      const src = playlist.tracks[index].src;
      if (!audio.src.endsWith(src)) audio.src = src;
      audio.play().catch(() => setPlayingUI(false));
    };

    const playAt = (i) => {
      select(i);
      play();
    };

    const seek = (clientX) => {
      if (!audio.duration) return;
      const rect = progressBar.getBoundingClientRect();
      audio.currentTime = ((clientX - rect.left) / rect.width) * audio.duration;
    };

    audio.addEventListener("play", () => setPlayingUI(true));
    audio.addEventListener("pause", () => setPlayingUI(false));
    audio.addEventListener("loadedmetadata", () => {
      timeTotal.textContent = formatTime(audio.duration);
    });
    audio.addEventListener("timeupdate", () => {
      if (!audio.duration) return;
      timeCurrent.textContent = formatTime(audio.currentTime);
      setProgress(audio.currentTime / audio.duration);
    });
    audio.addEventListener("ended", () => {
      // Continúa con la siguiente; al terminar la última vuelve al inicio en pausa
      if (index < items.length - 1) playAt(index + 1);
      else select(0);
    });

    playBtn.addEventListener("click", () => (audio.paused ? play() : audio.pause()));
    $(".prev-btn").addEventListener("click", () =>
      audio.currentTime > 3 ? (audio.currentTime = 0) : playAt(index - 1)
    );
    $(".next-btn").addEventListener("click", () => playAt(index + 1));
    items.forEach((li, i) =>
      li.querySelector(".song-btn").addEventListener("click", () =>
        i === index && audio.src ? playBtn.click() : playAt(i)
      )
    );

    progressBar.addEventListener("click", (e) => seek(e.clientX));
    progressBar.addEventListener("keydown", (e) => {
      if (!audio.duration) return;
      if (e.key === "ArrowRight") audio.currentTime = Math.min(audio.duration, audio.currentTime + 5);
      if (e.key === "ArrowLeft") audio.currentTime = Math.max(0, audio.currentTime - 5);
    });

    select(0);
    setPlayingUI(false);
  };

  document.querySelectorAll(".spotify-wrapper[data-mix]").forEach(createPlayer);
})();
