let red = function(accumurator, word){
    accumurator[word] = ++accumurator[word] || 1;
    //return accumurator;
    return accumurator;
}


function countWords(inputWords) {
    // SOLUTION GOES HERE
    return inputWords.reduce(red,{});
}


module.exports = countWords