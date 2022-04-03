import * as variables from "./variables.js";
import { getData } from "./getData.js";
import { buildResults } from "./buildResults.js";
import { cleanPieces } from "./filterResults.js"; 
import { uiStack} from "./uiStack.js";

const searchPieces = () => {  
    uiStack.loading(true)

    const figures = document.querySelectorAll("a")
    figures.forEach(figure => {
        figure.remove();
    })

    fetch(`${variables.url}${variables.input.value}`)
    .then(response => response.json())
    .then(getData)
    .then(cleanPieces)
    .then(buildResults)
    // .then(uiStack.loading())
    
    // .catch(uiStack.error())
}

export {searchPieces};