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

function f(right, key) {
    
    const expansionTable = [32, 1, 2, 3, 4, 5, 4, 5, 6, 7, 8, 9, 8, 9, 10, 11, 
        12, 13, 12, 13, 14, 15, 16, 17, 16, 17, 18, 19, 20, 
        21, 20, 21, 22, 23, 24, 25, 24, 25, 26, 27, 28, 29, 
        28, 29, 30, 31, 32, 1];
    
}

function parityDrop(key){
    let i = 0;
    let dropedKey = '';
    for(let i = 0; i < 64; i++){
        if(i+1 % 8 == 0)
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
    
}