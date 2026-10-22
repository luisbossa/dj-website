// Catálogo de música.
// Para añadir una canción: copia el .mp3 en /assets/audio/ y agrega un objeto
// a "tracks" del mix correspondiente. El reproductor "Todos los mixes" las
// incluye automáticamente.
window.DJ_MIXES = {
  "mix-1": {
    title: "Halfway Off the Porch",
    artist: "AG Club",
    cover: "/assets/images/covers/ag-club.webp",
    tracks: [{ title: "Memphis", src: "/assets/audio/ag-club.mp3", duration: "3:20" }],
  },
  "mix-2": {
    title: "The Forever Story",
    artist: "JID",
    cover: "/assets/images/covers/jid.jpeg",
    tracks: [
      { title: "Dance Now", src: "/assets/audio/dance-now.mp3", duration: "3:47" },
      { title: "Dreamville", src: "/assets/audio/dreamville.mp3", duration: "3:03" },
    ],
  },
  "mix-3": {
    title: "Lords of Flatbush 3",
    artist: "The Underachievers",
    cover: "/assets/images/covers/the-underachieve.jpeg",
    tracks: [
      { title: "Play That Way", src: "/assets/audio/play-that-way.mp3", duration: "3:25" },
      { title: "Brand New", src: "/assets/audio/brand-new.mp3", duration: "4:11" },
    ],
  },
  "mix-4": {
    title: "Drake Essentials",
    artist: "Drake",
    cover: "/assets/images/covers/drake.jpeg",
    tracks: [
      { title: "Believe Me", src: "/assets/audio/believe-me.mp3", duration: "5:38" },
      { title: "Jumpman", src: "/assets/audio/jumpman.mp3", duration: "3:26" },
      { title: "Nonstop", src: "/assets/audio/nonstop.mp3", duration: "3:58" },
    ],
  },
};
