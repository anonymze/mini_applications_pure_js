const triggers = document.querySelectorAll('.cool > li');
const background = document.querySelector('.dropdownBackground');
const nav = document.querySelector('.top');

function handle_enter() {
    this.classList.add('trigger-enter');
    setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150); // shortcut, si première condition alors la next (marche car première condition est un boolean)
        // if (this.classList.contains('trigger-enter')) {
        //     this.classList.add('trigger-enter-active')
        // }
    

    background.classList.add('open');

    const dropdown = this.querySelector('.dropdown');
    // console.dir(dropdown);

    const dropdown_coords = dropdown.getBoundingClientRect();
    const nav_coords = nav.getBoundingClientRect();
    const coords = {
        height: dropdown_coords.height,
        width: dropdown_coords.width,
        top: dropdown_coords.top - nav_coords.top, // si le boudindClientrect est nested, il s'en fou de la hauteur, il faut faire un calcul
        left: dropdown_coords.left - nav_coords.left,
    }

    console.log(coords, nav_coords);

    background.style.setProperty('width', `${coords.width}px`);
    background.style.height = `${coords.height}px`; // 2 façons
    background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);
}

function handle_leave() {
    this.classList.remove('trigger-enter', 'trigger-enter-active');
    background.classList.remove('open');
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handle_enter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handle_leave));