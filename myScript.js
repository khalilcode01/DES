function hexToBinary(hexaString){
    let binaryString = '';

    for (let i = 0; i < hexaString.length; i++){
        let binaryText = parseInt(hexaString[i], 16).toString(2).padStart(4, '0');
        binaryString += binaryText;
    }
    
    return binaryString;
}