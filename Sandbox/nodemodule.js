function HowManyWords(word){
    let letters={};
    let array = word.split('');
    array.forEach(char => {
        if(!Object.hasOwnProperty.call(letters, char))
        {
            letters[char] = 1;
        }
        else
            letters[char]++;
    });
    return letters;
}
exports.HowManyWords = HowManyWords;