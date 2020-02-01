// api des villes
const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];
/* let cities = []; */ // si on veut pas spread et dire que cities = data tout simplement

// nouvelle fonction du browser intégré fetch(), c'est une promesse donc on peut utiliser then(), blop c'est le statut de la requette, l'url etc.. et des promesses intégrés comme .json()
fetch(endpoint)
.then(blop => 
    //console.log(infos_fetch);
    blop.json())
.then(data => cities.push(...data)) // si on spread pas on aura un array nested dans un autre

function find_matches(worth_to_match, cities) {
    return cities.filter(place => {
        const regex = new RegExp(worth_to_match, 'gi') // g veut dire global, i veut dire insensitive (casse), on créé une var regex parce qu'on ne peut pas faire ça xxx.xxx.match(\word_to_watch\i), pas de vraible dans une requette regex direcement
        return place.city.match(regex) || place.state.match(regex);
    });
}

function display_matches() {
    if (this.value.length >= 2) {
        const match_array = find_matches(this.value, cities);
        const html = match_array.map(place => {
            const regex = new RegExp(this.value, 'gi');
            const city_name = place.city.replace(regex, `<span>${this.value}</span>`);
            const state_name = place.state.replace(regex, `<span>${this.value}</span>`);
            return `
                <li>
                    <span>${city_name}, ${state_name}</span>
                    <span>| Pop : ${place.population}</span>
                </li>
            `;

        }).join(''); // .join('') pour eviter d'avoir un tableau avec des virgules, on veut avoir tout un bloc html, si on met rien dans join(), il met des virgules automatiquement entre chaque élément
        suggestions.innerHTML = html;
    } else {
        suggestions.innerHTML = '';
    }
}

const search_input = document.getElementsByClassName('search')[0];
const suggestions = document.getElementsByClassName('suggestions')[0];

search_input.addEventListener('input', display_matches);
// search_input.addEventListener('change', display_matches); // ces deux feront aussi le travail mais c'est plus long
// search_input.addEventListener('keyup', display_matches);



