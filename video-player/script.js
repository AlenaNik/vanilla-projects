const video = document.getElementById('video');
const play = document.getElementById('play');
const stop = document.getElementById('stop');
const progress = document.getElementById('progress');
const timestamp = document.getElementById('timestamp');


//Play and pause

function toggleVideoStatus() {
    video.paused ? video.play() : video.pause()
}

function updatePlayIcon() {
    video.paused ? (play.innerHTML = '<i class="fa fa-play fa-2x"></i>')
    : (play.innerHTML = '<i class="fa fa-pause fa-2x"></i>')
}    

// update progress & timestamp 
function updateProgress() {
    return true;
}

// set video progress
function setVideoProgress() {
    return true;
}

// stop video

function stopVideo() {
    video.currentTime = 0;
    video.pause();
}

//eventListeners

video.addEventListener('click', toggleVideoStatus);
video.addEventListener('pause', updatePlayIcon);
video.addEventListener('play', updatePlayIcon);
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);