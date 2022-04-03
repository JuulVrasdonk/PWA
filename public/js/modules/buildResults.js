import * as variables  from "./variables.js";

const buildResults = cleanResults => {
    const buildItem = cleanResults.map(piece => {
        // const figure = document.createElement("figure");
        // const img = document.createElement("img");

        // img.src = piece.singleURL;
        // img.setAttribute("loading", "lazy");
        // img.setAttribute("alt", piece.title);
        // img.classList.add('item');

        // Snij de zin af bij 40 karakters en voeg '...' toe aan het einde.
        const figCaption = document.querySelectorAll("figcaption")
        figCaption.forEach(() => {
            figCaption.textContent = piece.title.length > 40 ? piece.title.substring(0, 40 - 3) + "..." : piece.title;
        })

        // figure.appendChild(img);
        // figure.appendChild(figCaption);
        // figure.setAttribute("id", piece.id)
        // variables.resultSection.appendChild(figure);


        const itemTemplate = `
            <a href="artwork/${piece.id}">
                <figure>
                    <img src="${piece.singleURL}" loading="lazy" alt="${piece.title}" class="item">
                    <figcaption>${piece.title}</figcaption>
                </figure>
            </a>
        `;

        variables.resultSection.insertAdjacentHTML('beforeend', itemTemplate);


        const pieceTitle = piece.title;
        const pieceMaker = piece.maker;
        const pieceImage = piece.singleURL;
        const id = piece.id;
        return {pieceTitle, itemTemplate, pieceMaker, pieceImage, id}
    });
    return buildItem
}

export {buildResults}