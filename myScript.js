function hexToBinary(hexaString){
    
    let binaryString = '';

    for (let i = 0; i < hexaString.length; i++){
        
        let binaryText = parseInt(hexaString[i], 16).toString(2).padStart(4, '0');
        
        binaryString += binaryText;
    
    }

    return binaryString;
}
function permute(plainText, permutationTable) {
    
    return permutationTable.map(index => plainText[index - 1]).join('');

}

function circularShiftLeft(str, shiftAmount) {
    let n = str.length;
    
    let shift = shiftAmount % n;

    let shiftedString = str.slice(shift) + str.slice(0, shift);
    
    return shiftedString;
}

function permuteKey(key, permutationTable, roundNumber) {
    
    let wholeKey = '';
    
    leftKey = key.slice(0, 28);
    
    rightKey = key.slice(28, 56);
    
    leftKey = circularShiftLeft(leftKey, 1);
    
    rightKey = circularShiftLeft(rightKey, 1);
    
    combinedKey = leftKey.concat(rightKey);

    return permute(combinedKey, permutationTable);
}

function f(right, key) {
    
    const expansionTable = [32, 1, 2, 3, 4, 5, 4, 5, 6, 7, 8, 9, 8, 9, 10, 11, 
        12, 13, 12, 13, 14, 15, 16, 17, 16, 17, 18, 19, 20, 
        21, 20, 21, 22, 23, 24, 25, 24, 25, 26, 27, 28, 29, 
        28, 29, 30, 31, 32, 1];
    
    const sBox = [ 14, 4, 13, 1, 2, 15, 11, 8, 3, 10, 6, 12, 5, 9, 0, 7,
        0, 15, 7, 4, 14, 2, 13, 1, 10, 6, 12, 11, 9, 5, 3, 8,
        4, 1, 14, 8, 13, 6, 2, 11, 15, 12, 9, 7, 3, 10, 5, 0,
        15, 12, 8, 2, 4, 9, 1, 7, 5, 11, 3, 14, 10, 0, 6, 13];
    
    const pc2Table = [
        14, 17, 11, 24,  1,  5,
        3, 28, 15,  6, 21, 10,
        23, 19, 12,  4, 26,  8,
        16,  7, 27, 20, 13,  2,
        41, 52, 31, 37, 47, 55,
        30, 40, 51, 45, 33, 48,
        44, 49, 39, 56, 34, 53,
        46, 42, 50, 36, 29, 32
        ];
    roundKey = permuteKey(key, pc2Table, 1);
    let expandedRight = permute(right, expansionTable);
    
}

function parityDrop(key){

    let dropedKey = '';

    for(let i = 0; i < 64; i++){
        
        if(i + 1 % 8 == 0)
            continue
        
        dropedKey += key[i];
    
    }

    return dropedKey;

}

function encrypt(plainText, key) {
    
    const initialPermutation = [58, 50, 42, 34, 26, 18, 10, 2, 60, 52, 44, 36, 
        28, 20, 12, 4, 62, 54, 46, 38, 30, 22, 14, 6, 
        64, 56, 48, 40, 32, 24, 16, 8, 57, 49, 41, 33, 
        25, 17, 9, 1, 59, 51, 43, 35, 27, 19, 11, 3, 
        61, 53, 45, 37, 29, 21, 13, 5, 63, 55, 47, 39, 
        31, 23, 15, 7];

    let permuted = permute(plainText, initialPermutation);
    
    let leftPlainText;
    
    let rightPlainText;
    
    for(let i = 0; i < 64; i++){
        
        if(i < 32)
            leftPlainText += permuted[i];
        
        else if (i > 32 && i < 64)
            rightPlainText += permuted[i];

    }

    dropedKey = parityDrop(key);
    
}