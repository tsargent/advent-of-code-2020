module.exports = function findCol(str) {
    const instructions = str.split('');
    const totalCols = 8;
    let lowerBound = 0;
    let upperBound = totalCols - 1;
    let col;
    for(let i = 0; i < instructions.length; i++) {
        const letter = instructions[i];
        const diff = upperBound - lowerBound;
        if(letter === 'L') {
            upperBound = Math.floor(upperBound - (diff / 2));
        }

        if(letter === 'R') {
            lowerBound = Math.ceil(lowerBound + (diff / 2));
        }

        if(i === instructions.length - 1) {
            if(letter === 'L') {
                col = lowerBound;
            } else {
                col = upperBound;
            }
        }
    }

    return col;
}