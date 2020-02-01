const panels = document.getElementsByClassName('panel');
// const panels = document.querySelectorAll('.panel'); // cette méthode marche aussi et on peut appeller forEach dessus car c'est un node array type


function toggle_open() {
    this.classList.toggle('open');
}


function toggle_active(e) {
   if (e.propertyName.includes('flex')) { // on aurait pu faire if ... e.propertyName === "flex" mais certains browser ont comme nom flex ou flex-grow 
        this.classList.toggle('open-active')
   }
}


// panels.forEach(panel => panel.addEventListener('click', toggle_open));


for (let panel of panels) {
    panel.addEventListener('click', toggle_open);
}

for (let panel of panels) {
    panel.addEventListener('transitionend', toggle_active);
}