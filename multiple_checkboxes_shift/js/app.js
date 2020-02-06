const checkboxes = document.querySelectorAll('input[type="checkbox"');

function handle_check(e) {

    let in_between = false;    

    if(e.shiftKey && this.checked) {
        checkboxes.forEach(checkbox => {
            if(checkbox === this || checkbox === last_checked) {
                in_between = !in_between;
            }

            if(in_between) {
                checkbox.checked = true;
            }
        })
    }

    last_checked = this;
}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handle_check))