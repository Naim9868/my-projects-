 // DOM Elements
 const video = document.getElementById('video');
 const playBtn = document.getElementById('play-btn');
 const muteBtn = document.getElementById('mute-btn');
 const volumeSlider = document.getElementById('volume-slider');
 const currentTimeElement = document.getElementById('current-time');
 const durationElement = document.getElementById('duration');
 const progressBar = document.getElementById('progress-bar');
 const progressContainer = document.getElementById('progress-container');
 const previewThumbnail = document.getElementById('preview-thumbnail');
 const speedBtn = document.getElementById('speed-btn');
 const qualityBtn = document.getElementById('quality-btn');
 const qualityMenu = document.getElementById('quality-menu');
 const speedMenu = document.getElementById('speed-menu');
 const theaterBtn = document.getElementById('theater-btn');
 const fullscreenBtn = document.getElementById('fullscreen-btn');
 const playerContainer = document.querySelector('.player-container');

 // Play/Pause
 playBtn.addEventListener('click', togglePlay);
 video.addEventListener('click', togglePlay);
 
 function togglePlay() {
     if (video.paused) {
         video.play();
         playBtn.innerHTML = '<i class="fas fa-pause"></i>';
         playerContainer.classList.remove('paused');
     } else {
         video.pause();
         playBtn.innerHTML = '<i class="fas fa-play"></i>';
         playerContainer.classList.add('paused');
     }
 }

 // Mute/Volume
 muteBtn.addEventListener('click', toggleMute);
 volumeSlider.addEventListener('input', setVolume);
 
 function toggleMute() {
     video.muted = !video.muted;
     muteBtn.innerHTML = video.muted 
         ? '<i class="fas fa-volume-mute"></i>' 
         : '<i class="fas fa-volume-up"></i>';
     volumeSlider.value = video.muted ? 0 : video.volume;
 }
 
 function setVolume() {
     video.volume = volumeSlider.value;
     video.muted = volumeSlider.value === '0';
     muteBtn.innerHTML = video.muted 
         ? '<i class="fas fa-volume-mute"></i>' 
         : '<i class="fas fa-volume-up"></i>';
 }

 // Progress Bar
 video.addEventListener('timeupdate', updateProgressBar);
 progressContainer.addEventListener('mousemove', showPreviewThumbnail);
 progressContainer.addEventListener('mouseout', hidePreviewThumbnail);
 progressContainer.addEventListener('click', seek);
 
 function updateProgressBar() {
     const percent = (video.currentTime / video.duration) * 100;
     progressBar.style.width = `${percent}%`;
     currentTimeElement.textContent = formatTime(video.currentTime);
     durationElement.textContent = formatTime(video.duration);
 }
 
 function showPreviewThumbnail(e) {
     const rect = progressContainer.getBoundingClientRect();
     const pos = (e.clientX - rect.left) / rect.width;
     const time = pos * video.duration;
     
     // Show preview thumbnail (would need actual thumbnails in a real app)
     previewThumbnail.style.display = 'block';
     previewThumbnail.style.left = `${pos * 100}%`;
     previewThumbnail.src = `thumbnail-at-${Math.floor(time)}.jpg`; // Example
 }
 
 function hidePreviewThumbnail() {
     previewThumbnail.style.display = 'none';
 }
 
 function seek(e) {
     const rect = progressContainer.getBoundingClientRect();
     const pos = (e.clientX - rect.left) / rect.width;
     video.currentTime = pos * video.duration;
 }

 // Speed Control
 speedBtn.addEventListener('click', () => {
     speedMenu.classList.toggle('show');
     qualityMenu.classList.remove('show');
 });
 
 document.querySelectorAll('#speed-menu .settings-item').forEach(item => {
     item.addEventListener('click', function() {
         const speed = parseFloat(this.getAttribute('data-speed'));
         video.playbackRate = speed;
         speedBtn.querySelector('span').textContent = `${speed}x`;
         
         document.querySelectorAll('#speed-menu .settings-item').forEach(i => {
             i.classList.remove('active');
         });
         this.classList.add('active');
         
         speedMenu.classList.remove('show');
     });
 });

 // Quality Control
 qualityBtn.addEventListener('click', () => {
     qualityMenu.classList.toggle('show');
     speedMenu.classList.remove('show');
 });
 
 document.querySelectorAll('#quality-menu .settings-item').forEach(item => {
     item.addEventListener('click', function() {
         const quality = this.getAttribute('data-quality');
         // In a real app, you would switch video sources here
         console.log(`Switched to ${quality}p`);
         
         document.querySelectorAll('#quality-menu .settings-item').forEach(i => {
             i.classList.remove('active');
         });
         this.classList.add('active');
         
         qualityMenu.classList.remove('show');
     });
 });

 // Theater Mode
 theaterBtn.addEventListener('click', toggleTheaterMode);
 
 function toggleTheaterMode() {
     playerContainer.classList.toggle('theater-mode');
 }

 // Fullscreen
 fullscreenBtn.addEventListener('click', toggleFullscreen);
 
 function toggleFullscreen() {
     if (!document.fullscreenElement) {
         playerContainer.requestFullscreen().catch(err => {
             console.error(`Fullscreen error: ${err.message}`);
         });
         fullscreenBtn.innerHTML = '<i class="fas fa-compress"></i>';
     } else {
         document.exitFullscreen();
         fullscreenBtn.innerHTML = '<i class="fas fa-expand"></i>';
     }
 }

 // Keyboard Shortcuts
 document.addEventListener('keydown', (e) => {
     if (document.activeElement.tagName === 'INPUT') return;
     
     switch (e.key.toLowerCase()) {
         case ' ':
             e.preventDefault();
             togglePlay();
             break;
         case 'f':
             toggleFullscreen();
             break;
         case 'm':
             toggleMute();
             break;
         case 'arrowleft':
             video.currentTime -= 5;
             break;
         case 'arrowright':
             video.currentTime += 5;
             break;
         case 't':
             toggleTheaterMode();
             break;
     }
 });

 // Helper Functions
 function formatTime(seconds) {
     const minutes = Math.floor(seconds / 60);
     const secs = Math.floor(seconds % 60);
     return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
 }

 // Initialize
 video.addEventListener('loadedmetadata', () => {
     durationElement.textContent = formatTime(video.duration);
 });