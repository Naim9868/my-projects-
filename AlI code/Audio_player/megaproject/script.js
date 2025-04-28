// DOM Elements
const dropZone = document.getElementById('dropZone');
const fileInput = document.getElementById('fileInput');
const playlist = document.getElementById('playlist');
const playBtn = document.getElementById('playBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const progressBar = document.getElementById('progressBar');
const progressContainer = document.getElementById('progressContainer');
const currentTimeEl = document.getElementById('currentTime');
const durationEl = document.getElementById('duration');
const volumeControl = document.getElementById('volumeControl');

// Player state
let audio = new Audio();
let tracks = [];
let currentTrackIndex = 0;
let isPlaying = false;
let previousObjectUrl = null;

// Initialize
volumeControl.value = audio.volume;

// Event Listeners
dropZone.addEventListener('click', () => fileInput.click());
fileInput.addEventListener('change', handleFiles);

// Drag and drop events
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropZone.addEventListener(eventName, preventDefaults, false);
});

['dragenter', 'dragover'].forEach(eventName => {
    dropZone.addEventListener(eventName, highlight, false);
});

['dragleave', 'drop'].forEach(eventName => {
    dropZone.addEventListener(eventName, unhighlight, false);
});

dropZone.addEventListener('drop', handleDrop, false);

// Player controls
playBtn.addEventListener('click', togglePlay);
prevBtn.addEventListener('click', prevTrack);
nextBtn.addEventListener('click', nextTrack);
progressContainer.addEventListener('click', setProgress);
volumeControl.addEventListener('input', setVolume);

// Audio events
audio.addEventListener('timeupdate', updateProgress);
audio.addEventListener('ended', nextTrack);
audio.addEventListener('loadedmetadata', updateDuration);
audio.addEventListener('error', handleAudioError);

// Functions
function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
}

function highlight() {
    dropZone.classList.add('active');
}

function unhighlight() {
    dropZone.classList.remove('active');
}

function handleDrop(e) {
    const dt = e.dataTransfer;
    const files = dt.files;
    handleFiles({ target: { files } });
}

function handleFiles(e) {
    const files = Array.from(e.target.files).filter(file => file.type.startsWith('audio/'));
    
    if (files.length === 0) {
        alert('Please select audio files only');
        return;
    }
    
    tracks = files.map((file, index) => ({
        id: index,
        name: file.name.replace(/\.[^/.]+$/, ""), // Remove extension
        file: file,
        duration: '0:00'
    }));
    
    renderPlaylist();
    loadTrack(0);
    updateControls();
}

function renderPlaylist() {
    playlist.innerHTML = '';
    
    tracks.forEach((track, index) => {
        const trackEl = document.createElement('div');
        trackEl.className = `track ${index === currentTrackIndex ? 'active' : ''}`;
        trackEl.innerHTML = `
            <div class="track-number">${index + 1}</div>
            <div class="track-name" title="${track.name}">${track.name}</div>
            <div class="track-duration">${track.duration}</div>
        `;
        trackEl.addEventListener('click', () => loadTrack(index));
        playlist.appendChild(trackEl);
    });
}

function loadTrack(index) {
    if (tracks.length === 0) return;
    
    // Revoke previous object URL to prevent memory leaks
    if (previousObjectUrl) {
        URL.revokeObjectURL(previousObjectUrl);
    }
    
    currentTrackIndex = index;
    const track = tracks[index];
    
    // Create new object URL for the file
    const objectUrl = URL.createObjectURL(track.file);
    previousObjectUrl = objectUrl;
    audio.src = objectUrl;
    
    // Update UI
    renderPlaylist();
    updateControls();
    
    if (isPlaying) {
        audio.play()
            .then(() => {
                playBtn.textContent = '⏸';
            })
            .catch(error => {
                console.error('Playback failed:', error);
                isPlaying = false;
                playBtn.textContent = '▶';
            });
    }
}

function togglePlay() {
    if (tracks.length === 0) {
        alert('No tracks loaded. Please add audio files first.');
        return;
    }
    
    if (audio.paused) {
        audio.play()
            .then(() => {
                isPlaying = true;
                playBtn.textContent = '⏸';
            })
            .catch(error => {
                console.error('Playback failed:', error);
                alert('Playback failed. Please try another audio file.');
                isPlaying = false;
                playBtn.textContent = '▶';
            });
    } else {
        audio.pause();
        isPlaying = false;
        playBtn.textContent = '▶';
    }
}

function prevTrack() {
    if (tracks.length === 0) return;
    
    currentTrackIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    loadTrack(currentTrackIndex);
    
    if (isPlaying) {
        audio.play().catch(error => {
            console.error('Playback failed:', error);
            isPlaying = false;
            playBtn.textContent = '▶';
        });
    }
}

function nextTrack() {
    if (tracks.length === 0) return;
    
    currentTrackIndex = (currentTrackIndex + 1) % tracks.length;
    loadTrack(currentTrackIndex);
    
    if (isPlaying) {
        audio.play().catch(error => {
            console.error('Playback failed:', error);
            isPlaying = false;
            playBtn.textContent = '▶';
        });
    }
}

function updateProgress() {
    const { currentTime, duration } = audio;
    const progressPercent = (currentTime / duration) * 100;
    progressBar.style.width = `${progressPercent}%`;
    
    currentTimeEl.textContent = formatTime(currentTime);
    
    if (durationEl.textContent === '0:00' && !isNaN(duration)) {
        durationEl.textContent = formatTime(duration);
        tracks[currentTrackIndex].duration = formatTime(duration);
        updateTrackDurationInPlaylist();
    }
}

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;
    audio.currentTime = (clickX / width) * duration;
}

function updateDuration() {
    if (!isNaN(audio.duration)) {
        durationEl.textContent = formatTime(audio.duration);
        tracks[currentTrackIndex].duration = formatTime(audio.duration);
        updateTrackDurationInPlaylist();
    }
}

function updateTrackDurationInPlaylist() {
    const trackElements = playlist.querySelectorAll('.track');
    if (trackElements[currentTrackIndex]) {
        const durationElement = trackElements[currentTrackIndex].querySelector('.track-duration');
        if (durationElement) {
            durationElement.textContent = tracks[currentTrackIndex].duration;
        }
    }
}

function setVolume() {
    audio.volume = volumeControl.value;
}

function formatTime(seconds) {
    if (isNaN(seconds)) return '0:00';
    
    const minutes = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

function handleAudioError() {
    console.error('Audio error:', audio.error);
    alert('Error playing audio. Please try another file.');
    isPlaying = false;
    playBtn.textContent = '▶';
}

function updateControls() {
    const hasTracks = tracks.length > 0;
    playBtn.disabled = !hasTracks;
    prevBtn.disabled = !hasTracks || tracks.length === 1;
    nextBtn.disabled = !hasTracks || tracks.length === 1;
}

// Initialize controls
updateControls();