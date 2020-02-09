const pressed = [];
const secret_code = 'yann'

window.addEventListener('keyup', e => {
    pressed.push(e.key);
    pressed.splice(-secret_code.length - 1, pressed.length - secret_code.length); // pour avoir le nombre exact de caractère du secret code dans le tableau 

    if (pressed.join('').includes(secret_code)) {
        alert('GG tu as trouvé le code secret :)');
        cornify_add();
    }

})