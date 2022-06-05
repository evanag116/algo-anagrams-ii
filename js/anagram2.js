exports.anagramsFor = function(word, listOfWords) {

    let answer = []

    word = word.toLowerCase().replace(/ /g, "")
    word = word.split("")
    word = word.sort()
    word = word.join("")

    for (let i = 0; i < listOfWords.length; i++) {
        let testWord = listOfWords[i].toLowerCase().replace(/ /g, "")
        testWord = testWord.split("")
        testWord = testWord.sort()
        testWord = testWord.join("")

        if (word === testWord)
        answer.push(listOfWords[i])
    }

    
    return answer

};

