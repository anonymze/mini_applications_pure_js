const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];
console.log(items);

function add_item(e) {
    e.preventDefault(); // pour pas recahrger la page sur le submit du form
    const text = (this.querySelector('[name=item]')).value; // this est le form tag, value sera la value de l'input
    const item = {
        text,
        done: false
    };
    
    items.push(item);
    populate_list(items, itemsList);
    localStorage.setItem('items', JSON.stringify(items)); // set, get, removeItem -> premier élément est la clé
    this.reset(); // cette function marche sur un form lui disant remet tout à 0 /* TROP STYLE BTW */
}

function populate_list(repas = [], repas_liste) { // default array vide
    repas_liste.innerHTML = repas.map((plate, i) => {
        return `
            <li>
                <input type="checkbox" data-index="${i}" id="item${i}" ${plate.done ? 'checked' : ''}>
                <label for="item${i}">${plate.text}</label>
            </li>
        `;
    }).join('');
}

function toggle_done(e) {
    if (!e.target.matches('input')) return;
    const elem = e.target;
    const index = elem.dataset.index;
    items[index].done = !items[index].done;
    localStorage.setItem('items', JSON.stringify(items));
    populate_list(items, itemsList);
}

addItems.addEventListener('submit', add_item);
itemsList.addEventListener('click', toggle_done);
populate_list(items, itemsList);