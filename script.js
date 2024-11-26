let progress = document.getElementById("progress");
let song = document.getElementById("song");
let ctrlIcon = document.getElementById("ctrlIcon");

// Array of songs
const songs = [
  { src: "Go_-_NEFFEX.mp3", title: "Go", artist: "NEFFEX" },
  { src: "Despacito.mp3", title: "Despacito", artist: "Luis Fonsi Ft. Puerto Rican" },
  { src: "Shape_Of_You.mp3", title: "Shape of You", artist: "Ed Sheeran" }
];

let currentSongIndex = 0;

// Function to load song details
function loadSong(index) {
  song.src = songs[index].src;
  document.querySelector(".music-player h1").textContent = songs[index].title;
  document.querySelector(".music-player p").textContent = songs[index].artist;
  progress.value = 0;
  song.load();
  if (ctrlIcon.classList.contains("fa-pause")) {
    song.play();
  }
}

// Function to play or pause the song
function playPause() {
  if (ctrlIcon.classList.contains("fa-pause")) {
    song.pause();
    ctrlIcon.classList.remove("fa-pause");
    ctrlIcon.classList.add("fa-play");
  } else {
    song.play();
    ctrlIcon.classList.add("fa-pause");
    ctrlIcon.classList.remove("fa-play");
  }
}

// Function to switch to the next song
function nextSong() {
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  loadSong(currentSongIndex);
}

// Function to switch to the previous song
function prevSong() {
  currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
  loadSong(currentSongIndex);
}

// Update progress bar
song.ontimeupdate = function () {
  progress.value = song.currentTime;
};

// Seek to a new time
progress.oninput = function () {
  song.currentTime = progress.value;
  ctrlIcon.classList.add("fa-pause");
  ctrlIcon.classList.remove("fa-play");
};

// Initialize the first song
loadSong(currentSongIndex);

document.querySelector(".controls div:nth-child(1)").addEventListener("click", prevSong);
document.querySelector(".controls div:nth-child(3)").addEventListener("click", nextSong);
