import * as variables from "./variables.js"

const cancelSearch = () => {
    variables.hideButton.addEventListener('click', () => {
        document.querySelectorAll('figure').forEach(item => {
            item.remove();
        })    
        variables.main.classList.remove('focussed-main');
        variables.input.classList.remove('focussed-searchbar');
        variables.input.value = '';
        variables.hideButton.classList.remove('focussed-hidebutton');
    
    })
}

export {cancelSearch}
