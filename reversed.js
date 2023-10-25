function reverseWordsInSentence(sentence) {
    const words = sentence.split(' ');
    const reversedWords = [];

    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        const reversedWord = reverseString(word);
        reversedWords.push(reversedWord);
    }

    return reversedWords.join(' ');
}

function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

const inputSentence = "This is a sunny day";
const reversedSentence = reverseWordsInSentence(inputSentence);
console.log(reversedSentence);
