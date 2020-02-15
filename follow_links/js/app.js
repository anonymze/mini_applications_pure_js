const triggers = document.querySelectorAll('a');
const highlight = document.createElement('span');
document.body.append(highlight);

highlight.classList.add('highlight');

function highlight_link() {
    const link_coords = this.getBoundingClientRect();
    // console.log(link_coords); /* Coordonnées de l'élement */

    const coords = {
        width: link_coords.width,
        height: link_coords.height,
        top: link_coords.top + window.scrollY,
        left: link_coords.left + window.scrollX,
    }
    
    highlight.style.width = `${link_coords.width}px`;
    highlight.style.height = `${link_coords.height}px`;
    highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`;
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', highlight_link));