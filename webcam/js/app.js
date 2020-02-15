const video = document.querySelector('.player'),
canvas = document.querySelector('.photo'),
ctx = canvas.getContext('2d'),
strip = document.querySelector('.strip'),
snap = document.querySelector('.snap');

function get_video() {
    navigator.mediaDevices.getUserMedia({ video: true, audio: false })
        .then(local_media_stream =>  {
            console.dir(local_media_stream);
            //url_video = window.URL.createObjectURL(local_media_stream); /* Pour chrome */
            //video.src = url_video;
            video.srcObject = local_media_stream; /* Pour firefox */

            video.play();
        })        
        .catch(err => console.error('OH NOOOOO dommage', err));
}

function paint_to_canvas() {
    const width = video.videoWidth;
    const height = video.videoHeight;
    canvas.width = width;
    canvas.height = height;

    return setInterval(() => {
        ctx.drawImage(video, 0, 0, width, height);
    }, 16);

}

function take_photo() {
    // joue le son
    snap.current = 0;
    snap.play();

    //  prend la frame sur le canva
    const data = canvas.toDataURL('image/jpeg');
    const link = document.createElement('a');
    link.href = data;
    console.log(data);
    link.setAttribute('download', 'handsome');
    // link.textContent = 'Download Image';
    link.innerHTML = `<img src="${data}" alt="Heyyy bg">`
    strip.insertBefore(link, strip.firstChild);
}

get_video();
video.addEventListener('canplay', paint_to_canvas); // canplay, si la vidéo est prete il fait cette function

