//Audio Player code need to revission..

// Get DOM elements
const dropZone = document.getElementById('dropZone');
const fileInput = document.getElementById('fileInput');
const fileList = document.getElementById('fileList');
// const audioPlayer = document.getElementById('audioPlayer');

let currentFiles = [];

// 1. Handle click to open file dialog
dropZone.addEventListener('click', () => {
    fileInput.click();
});

// 2. Handle file selection via file input
fileInput.addEventListener('change', (e) => {
    handleFiles(e.target.files);
});

// 3. Set up drag and drop events
// Prevent default drag behaviors
['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropZone.addEventListener(eventName, preventDefaults, false);
});

// Highlight drop zone when item is dragged over it
['dragenter', 'dragover'].forEach(eventName => {
    dropZone.addEventListener(eventName, highlight, false);
});

// Remove highlight when item leaves
['dragleave', 'drop'].forEach(eventName => {
    dropZone.addEventListener(eventName, unhighlight, false);
});

// Handle dropped files
dropZone.addEventListener('drop', handleDrop, false);

// Helper functions
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
    handleFiles(files);
}

function handleFiles(files) {
    // Convert FileList to array and filter for audio files
    const audioFiles = [...files].filter(file => file.type.startsWith('audio/'));
    
    if (audioFiles.length === 0) {
        alert('Please only drop audio files (MP3, WAV, OGG, etc.)');
        return;
    }
    
    currentFiles = audioFiles;
    displayFiles(audioFiles);
    playFirstFile(audioFiles);
}

function displayFiles(files) {
    fileList.innerHTML = '';
    
    files.forEach((file, index) => {
        const fileItem = document.createElement('div');
        fileItem.className = 'audio-item';
        fileItem.innerHTML = `
            <p><strong>${file.name}</strong></p>
            <p>Type: ${file.type || 'unknown'}</p>
            <p>Size: ${formatFileSize(file.size)}</p>
            <button class="audio-play" id="play-${index}">Play</button>
            <audio id="audio-${index}" controls style="display: none; width: 100%; margin-top: 8px;"></audio>
        `;
        fileList.appendChild(fileItem);
    });

    // Add event listeners using event delegation
    fileList.addEventListener('click', (e) => {
        if (e.target.classList.contains('audio-play')) {
            const index = e.target.id.split('-')[1];
            playFile(parseInt(index));
        }
    });
}
function playFirstFile(files) {
    if (files.length > 0) {
        playFile(0);
    }
}

function playFile(index) {
    // Pause all other audio elements first
    document.querySelectorAll('audio').forEach(audio => {
        if (audio.id !== `audio-${index}`) {
            audio.pause();
            audio.style.display = 'none';
        }
    });

    const file = currentFiles[index];
    const audioElement = document.getElementById(`audio-${index}`);
    const playButton = document.getElementById(`play-${index}`);
    
    // Clean up previous audio source if exists
    if (audioElement.src) {
        URL.revokeObjectURL(audioElement.src);
    }
    
    const objectUrl = URL.createObjectURL(file);
    audioElement.src = objectUrl;
    audioElement.style.display = 'inline-block';
    
    // Update button text based on playback state
    audioElement.addEventListener('play', () => {
        playButton.textContent = 'Playing...';
    });
    
    audioElement.addEventListener('pause', () => {
        playButton.textContent = 'Play';
    });
    
    audioElement.play();
}

function formatFileSize(bytes) {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2) + ' ' + sizes[i]);
}

//Audio Player code need to revission..
