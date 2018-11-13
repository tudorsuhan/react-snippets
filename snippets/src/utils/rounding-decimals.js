// http://www.jacklmoore.com/notes/rounding-in-javascript/
const round = (value, decimals) => {
    return Number(Math.round(value + 'e' + decimals) + 'e-' + decimals)
}

// console.log(round(1.0778705, 2)) // Output: 1.08