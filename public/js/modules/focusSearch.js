import * as variables from "./variables.js"

const focusSearch = () => {
    variables.input.addEventListener('focus', () => {
        variables.main.classList.add('focussed-main');
        variables.input.classList.add('focussed-searchbar');
        variables.hideButton.classList.add('focussed-hidebutton');
    })
}

export {focusSearch}