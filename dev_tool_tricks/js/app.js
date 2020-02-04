const dogs = [{ name: 'Snicky', age: 2}, { name: 'Tolio', age: 7}];

/* Check attributes one by one */

// Point d'arret en français, ou break on, click droit sur l'element pour aussi dire que c'est hover, aussi pour voir les prioriétés sur le DOM

/* Styled console.log */

//clearing
console.clear();

// css
console.log('%c Je suis Yann', 'font-size:20px; color:gray');

// var 
console.log('Je suis Yann %s', 'Metier');

//table
console.table(dogs);

// warning
console.warn('hihi gaffe');

// error
console.error('hihi gaffe');

// info
console.info('hey une info');

//testing, si c'est vrai n'affiche rien, c'est cool pour afficher uniquement quand c'est faux
const h1 = document.querySelector('h1');
console.assert(h1.classList.contains('hihi'), 'That is wrong');

// viewing DOM elements
console.dir(h1);

// grouping together, fais la différence entre les loop et les mets dans un group
dogs.forEach( dog => {
    // console.group(dog.name);
    console.groupCollapsed(dog.name);
    console.log(`${dog.name} is ${dog.age} years old`);
    console.log(`${dog.name} is ${dog.age * 7 } dog years old`);
    console.groupEnd(dog.name);
})

//counting, compte combien de fois j'ai run ce console.log
console.count('wes');
console.count('wes');
console.count('wes');

// timing, pour tester combien de temps une fonction a prise etc
console.time('fetching data');
fetch('https://api.github.com/users/wesbos')
    .then(data => data.json())
    .then( data => {
        console.timeEnd('fetching data');
        console.log(data);
    })



