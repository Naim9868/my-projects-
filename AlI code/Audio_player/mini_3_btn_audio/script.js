//how to play audio in java script..


// DOM Elements
const trackButtons = document.querySelectorAll('.track-btn');
const pauseBtn = document.getElementById('pauseBtn');
const stopBtn = document.getElementById('stopBtn');
const volumeControl = document.getElementById('volumeControl');

// Audio state
let audio = null;
let currentTrack = null;

// Initialize volume
let volume = 0.7;

// Track button click handler
trackButtons.forEach(button => {
    button.addEventListener('click', () => {
        const trackName = button.textContent;
        playTrack(trackName);
    });
});

// Pause/Play toggle
pauseBtn.addEventListener('click', () => {
    if (!audio) return;
    
    if (audio.paused) {
        audio.play()
            .then(() => {
                pauseBtn.textContent = '⏸️ Pause';
                pauseBtn.disabled = false;
            })
            .catch(error => {
                console.error('Playback failed:', error);
            });
    } else {
        audio.pause();
        pauseBtn.textContent = '▶️ Play';
    }
});

// Stop button
stopBtn.addEventListener('click', () => {
    if (!audio) return;
    
    audio.pause();
    audio.currentTime = 0;
    pauseBtn.textContent = '▶️ Play';
});

// Volume control
volumeControl.addEventListener('input', () => {
    volume = parseFloat(volumeControl.value);
    if (audio) {
        audio.volume = volume;
    }
});

// Play track function
function playTrack(trackName) {
    // Stop current audio if playing
    if (audio) {
        audio.pause();
        audio.currentTime = 0;
    }
    
    // Create new audio based on track
    let audioFile = '';
    switch (trackName) {
        case '▶️ play_1':
            audioFile = 'audio/Judaai (Audio Song) _ Badlapur _ Varun Dhawan_ Yami Gautam _ Nawazuddin Siddiqui(MP3_128K).mp3';
            break;
        case '▶️ play_2':
            audioFile = 'audio/Kaifi Khalil - Kahani Suno 2.0 [Official Music Video](MP3_320K).mp3';
            break;
        case '▶️ play_3':
            audioFile = 'audio/Rafta Rafta - Official Music Video _ Raj Ranjodh _ Atif Aslam Ft. Sajal Ali _ Tarish Music(MP3_320K).mp3';
            break;
        default:
            return;
    }
    
    // Create new audio object
    audio = new Audio(audioFile);
    audio.volume = volume;
    currentTrack = trackName;
    
    // Enable controls
    pauseBtn.disabled = false;
    stopBtn.disabled = false;
    
    // Play the audio
    audio.play()
        .then(() => {
            pauseBtn.textContent = '⏸️ Pause';
        })
        .catch(error => {
            console.error('Playback failed:', error);
            pauseBtn.textContent = '▶️ Play';
        });
    
    // Handle when audio ends
    audio.addEventListener('ended', () => {
        pauseBtn.textContent = '▶️ Play';
    });
    
    // Handle errors
    audio.addEventListener('error', () => {
        console.error('Error loading audio');
        pauseBtn.textContent = '▶️ Play';
        pauseBtn.disabled = true;
        stopBtn.disabled = true;
    });
}