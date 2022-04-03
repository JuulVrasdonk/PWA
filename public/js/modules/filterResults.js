const cleanPieces = pieces => {
    let cleanResults = pieces.filter(piece => {
        return piece.singleURL != 600;
    })
    return cleanResults
}

export {cleanPieces}