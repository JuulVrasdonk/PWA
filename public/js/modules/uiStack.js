import * as variables from "./variables.js"

const uiStack = {
    loading: (active) => {
        if(active) {
            // console.log('loading');
            // let templateLoader = 
            // `<div class="loader">
            //     <div class="loaderline"></div>
            //     <div class="loaderline"></div>
            //     <div class="loaderline"></div>
            //     <p>Loading</p>
            // </div>`;
            // variables.resultSection.innerHTML = templateLoader;

        } else {
            // variables.resultSection.innerHTML = "";
            // console.log('finished');
        }
    },
    error: () => {
        console.log('er ging iets mis');
    },
}

export {uiStack}