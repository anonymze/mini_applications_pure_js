const inventors = [
    { first: 'Albert', last: 'Eisntein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Tulur', year: 143, passed: 215 },
    { first: 'Tartenpion', last: 'Issou', year: 1766, passed: 1850 },
    { first: 'Omg', last: 'Iksdee', year: 2000, passed: 2034 },
    { first: 'Ouffezfz', last: 'Aapazrpjoi', year: 1700, passed: 1723 },
    { first: 'Yann', last: 'Boloss', year: 1691, passed: 1800 },
    { first: 'Poussé', last: 'Poids', year: 3, passed: 98 }
];

const people = ['Bro, Hey', 'Bernhard, Constentin', 'Jerome, Tonpere', 'Issou, Chankla', 'Depard, Jeremy', 'Matthieu, Pierre', 'Maringo, Piscine', 'Septh, Naab', 'Arthur, Tim', 'Yannick, Mauf', 'Keuf, Antonin', 'Sylvain, Piniouf', 'Sebastonin, Yves', 'Thom, Arf'];

const simple_people = ['Bro', 'Hey', 'Bernhard', 'Constentin', 'Jerome', 'Tonpere', 'Issou', 'Chankla', 'Depard', 'Jeremy', 'Matthieu', 'Pierre', 'Maringo', 'Piscine', 'Septh', 'Naab', 'Arthur', 'Tim', 'Yannick', 'Mauf', 'Keuf', 'Antonin', 'Sylvain', 'Piniouf', 'Sebastonin', 'Yves', 'Thom', 'Arf', 'Hey', 'Sylvain', 'Tim', 'Yannick', 'Piniouf'];


// FUNCTIONS

/* */

const fifteen = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 2000);

console.table(fifteen);

/* */

const full_names = inventors.map(inventor => `${inventor.first} ${inventor.last}`)

console.log(full_names);

/* */

// const ordered = inventors.sort(function(a, b) {
//     if (a.year > b.year) {
//         return 1;
//     } else {
//         return -1    
//     }
// })

const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1);

console.table(ordered);

/* */

const total_years = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
}, 0)

console.log(total_years);

/* */

const oldest = inventors.sort((a, b) => {
    const last_guy = a.passed - a.year;
    const next_guy = b.passed - b.year;

    return last_guy > next_guy ? -1 : 1;
})

console.table(oldest);

/* */

// Si tu veux convertir un tableau node en Array pour pouvoir utiliser plus de fonctions par exemple tu as plusieurs solutions

// const array = Array.from(array_node);

// const array = [...array_node];

// Tu peux enchainer le filtrage de tableau avec const de = links.map((link) => link.textContent).filter((street_name) => street.name.includes('de'));

/* */

const alpha = people.sort((last_one, next_one) => {
    const [a_last, a_first] = last_one.split(', ');
    const [b_last, b_first] = next_one.split(', ');
    return a_last > b_last ? 1 : -1;
})

console.log(alpha);

/* */

// Compte combien de fois l'attribue existe
const transportation = simple_people.reduce((object, people) => {
    
    if (!object[people]) {
        object[people] = 0;
    }
    object[people]++;
    return object
}, {}) // start avec un objet vide, il faut dire ce que sera object

console.log(transportation);

