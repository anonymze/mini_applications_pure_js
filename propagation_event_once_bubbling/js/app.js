const divs = document.querySelectorAll('div');

function log_text(e) {
    console.log(this.classList.value);
    e.stopPropagation(); // en gros stop bubbling,tu t'arretes là où tu es censé commencé, avec capture true il commencera au premier parent, sinon là où tu as cliqué
}

//document.body.addEventListener('click', log_text); /* si je clique sur les enfants le body sera considéré cliqué car il les wrappent autour */ 
divs.forEach( div => div.addEventListener('click', log_text)); // le système de capture fait du parent aux enfants, et l'event (bubbling) fait des enfants aux parents

divs.forEach( div => div.addEventListener('click', log_text, {
    capture: true, // si on dit que le capture est true, alors il considère l'event des parents aux enfants (l'inverse du bubbling)
    once: true // ça veut dire que l'event qu'il vient de se produire ne sera executé qu'une fois jusqu'à qu'un autre soit enclenché (dans le même bubbling, un autre event exterieur n'agira pas), si aucun autre n'est enlenché alors il ne se fera qu'une fois au total

    /* avec capture true et once, il va faire l'event du parent le plus haut du click, puis un deuxième click sur le même element fera le deuxième parent le plus haut etc..  */

    /* c'est équivalent à div.removeEventListener('click', function...) */
}));

document.querySelector('input').addEventListener('click', function(e) {
    console.warn('Input clicked');
}, {
    once: true
})