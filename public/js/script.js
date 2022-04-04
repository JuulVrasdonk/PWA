import {focusSearch} from "./modules/focusSearch.js";
import {cancelSearch} from "./modules/cancelSearch.js";
import * as variables from "./modules/variables.js";

if(variables.form && variables.hideButton) {
    focusSearch();
    cancelSearch();
} 

if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js');
}
  









