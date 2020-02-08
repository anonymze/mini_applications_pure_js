const player = document.querySelector('.player');
const video = player.querySelector('video');
const progress = player.querySelector('.progress');
const progress_bar = player.querySelector('.progress__filled');

const toggle = player.querySelector('.toggle');
const skip_buttons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');

/* Functions */
function toggle_play() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}

function update_button() {
    const icon = this.paused ? '▶' : '🔲';
    toggle.textContent = icon
}

function skip() {
    video.currentTime += parseFloat(this.dataset.skip);
}

function handle_range_update() {
    video[this.name] = this.value;
}

function handle_progress() {
    const percent = (video.currentTime / video.duration) * 100;
    progress_bar.style.flexBasis =  percent + '%';
}

function scrub(e) {
    const scrub_time = (e.offsetX / progress.offsetWidth) * video.duration;
    video.currentTime = scrub_time;
}

/* Listeners */

video.addEventListener('click', toggle_play);
video.addEventListener('play', update_button);
video.addEventListener('pause', update_button);
video.addEventListener('timeupdate', handle_progress);

toggle.addEventListener('click', toggle_play);

skip_buttons.forEach(skip_button => skip_button.addEventListener('click', skip));

ranges.forEach(range => range.addEventListener('change', handle_range_update));

ranges.forEach(range => range.addEventListener('mousemove', handle_range_update));

let mouse_down = false;
progress.addEventListener('click', scrub);
progress.addEventListener('mousemove', (e) => mouse_down && scrub(e));
progress.addEventListener('mousedown', () => mouse_down = true);;
progress.addEventListener('mouseup', () => mouse_down = false);;


