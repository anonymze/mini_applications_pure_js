const people = [
    { name: 'Hello', year: 2012 },
    { name: 'Thom', year: 1901 },
    { name: 'Hi', year: 1849 },
    { name: 'Trou', year: 1680},
    { name: 'Terrible', year: 1723 },
    { name: 'MOI', year: 2011 },
    { name: 'Pipe', year: 1945 }
];

const people2 = [
    { name: 'Hello', year: 2012 },
    { name: 'Thom', year: 1901 },
    { name: 'Hi', year: 1849 },
    { name: 'Trou', year: 1680},
    { name: 'Terrible', year: 1723 },
    { name: 'MOI', year: 2011 },
    { name: 'Pipe', year: 1945 }
];

const persons = ['Bro, Hey', 'Bernhard, Constentin', 'Jerome, Tonpere', 'Issou, Chankla', 'Depard, Jeremy', 'Matthieu, Pierre', 'Maringo, Piscine', 'Septh, Naab', 'Arthur, Tim', 'Yannick, Mauf', 'Keuf, Antonin', 'Sylvain, Piniouf', 'Sebastonin, Yves', 'Thom, Arf'];

const simple_people = ['Bro', 'Hey', 'Bernhard', 'Constentin', 'Jerome', 'Tonpere', 'Issou', 'Chankla', 'Depard', 'Jeremy', 'Matthieu', 'Pierre', 'Maringo', 'Piscine', 'Septh', 'Naab', 'Arthur', 'Tim', 'Yannick', 'Mauf', 'Keuf', 'Antonin', 'Sylvain', 'Piniouf', 'Sebastonin', 'Yves', 'Thom', 'Arf', 'Hey', 'Sylvain', 'Tim', 'Yannick', 'Piniouf'];

/* Advanced array loops */

/* some */

// ce loop te return true si pendant tout le loop il y quelqu'un chose de true dans ta condition
// is_someone_adult = true
const is_someone_adult = people.some(person => {
        const current_year = (new Date().getFullYear);
        return current_year - person.year >= 19;
        }
    );

/* every */

// all_adults = false tout le monde n'a pas 19 ans
const all_adults = people.every(person => (new Date().getFullYear) - person.year >= 19);

/* find */

// si il trouve une valeur true il te l'a renvoie dans dans ta var

// one_people = { name: 'Hello', year: 2012 };
const one_people = people.find(person => person.name === 'Thom');

/* findIndex */

// trouve l'index de l'element trouvé dans le tableau, find_index = 4
const find_index = people.findIndex(person => person.year === 1723);

// if you want to take only the index found (find serait meilleur) et en même temps le prendre du tableau d'origine
const hihi = people.splice(find_index, 1);

// if you want to retire the index, modify directement le tableau originel, marche pas dans une var
people.splice(find_index, 1);

// sinon technique que tlm fait avec un nouveau tableau en variable
const new_array_without_index = [
    ...people2.splice(find_index + 1),
    ...people2.splice(0, find_index)
]



