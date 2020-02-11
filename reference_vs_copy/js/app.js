let age = 100;
let age2 = age;
age = 200;

console.log(age, age2); /* On passe pas en ref avec var string boolean et nombre donc 200 et 100 */

const players = ['Hey', 'Oh', 'Ryan', 'Poppy'];
const team = players;
// fix
const team2 = players.slice();
const team3 = [].concat(players);
// es6 fix
const team4 = [...players];
const team5 = Array.from(players);
team[3] = 'Lux';
players[2] = 'Thor';

console.log(players, team, team2, team3, team4, team5); /* Il ya un passage de ref dans un tableau JS peu importe le sens */

const person = {
    name: 'Kikoo',
    age: 80
}

const captain = person;
captain.number = 99;

// fix
cap2 = Object.assign({}, person, { number: 30 });
cap3 = Object.assign({}, captain, { heyhey : 'Yo', name: 'José', hombre: 'Hihi'}); // Il garde les attribus de l'objet, les modifis si tu spécifies quel attribut, et ajoute les nouveaux

console.log(person, captain, cap2, cap3); /* Passage de ref sur les objets aussi */

const only_level_1_deep = {
    name: 'bro',
    age: 100,
    social: {
        twitter: 'Twitter',
        facebook: 'Face'
    }
}

const test = Object.assign({}, only_level_1_deep, { name: 'Ultime' });
test.age = 50;
test.social.facebook = 'Sisi'; /* Le sisi sera référencé sur l'objet de base aussi car cette technique ne marche sur sur 1 level de deepness */

// fix à ne pas trop faire (clone deep)
const cheat = JSON.parse(JSON.stringify(only_level_1_deep));
cheat.social.twitter = 'Yann';

console.log(only_level_1_deep, test, cheat);

