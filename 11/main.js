/* get elements */
const player = document.querySelector(".player");
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled')
const toggle = player.querySelector('.toggle')
const skipButtons = player.querySelectorAll('[data-skip');
const ranges = player.querySelectorAll('.player__slider');
let mouseDown = false;
/* Build functions */

function togglePlay(){
    if(video.paused){
        video.play();
    }
    else{
        video.pause();
    }
}
function updateButton(){
video.paused ? toggle.innerHTML = "►" : toggle.innerHTML = "| |"
}

function skip(){
    console.log()
    video.currentTime += parseFloat(this.dataset.skip);
}

function handleRangeUpdate(){
    video[this.name] = this.value;
}

function updateProgressBar(){
    const percent = 100 * (video.currentTime / video.duration);
    progressBar.style.flexBasis = `${percent}%`;
}

function scrub(e){
    const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrubTime;
}
/* event listeners */
video.addEventListener('click',togglePlay);
toggle.addEventListener('click',togglePlay);
video.addEventListener('play', updateButton);
video.addEventListener('pause', updateButton);
skipButtons.forEach(button => button.addEventListener('click',skip));
ranges.forEach(range => range.addEventListener('change', handleRangeUpdate));
// ranges.forEach(range => range.addEventListener('mousemove', handelRangeUpdate));

video.addEventListener('timeupdate', updateProgressBar);
progress.addEventListener('click',scrub);
progress.addEventListener('mousemove', (e) =>mouseDown && scrub(e));
progress.addEventListener('mousedown', () => mouseDown = true);
progress.addEventListener('mouseup', () => mouseDown = false);