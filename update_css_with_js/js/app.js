const inputs = document.querySelectorAll('.controls input');

function handleUpdate() {
    // dataset pour recup toutes les data d'un element et sizing et celui qu'on veut, si il trouve pas alors vide (on veut pas de undefined)
    const suffix = this.dataset.sizing || '';

    // retourn le nom du document en tant que node name
    //console.log(document.documentElement.nodeName);

    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));