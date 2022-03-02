function shout(word) {
    return word.toUpperCase()};

console.log(shout("hello"));

function whisper(word) {
    return word.toLowerCase()};

console.log(whisper("HELLO"));

function logShout(word) {
    console.log(word.toUpperCase())};

function logWhisper(word) {
    console.log(word.toLowerCase())};

function sayHiToHeadphonedRoommate(word) {
    if (word===word.toLowerCase()) {
        return "I can\'t hear you!"
    } else if (word===word.toUpperCase()) {
        return "YES INDEED!"
    } else if (word==="Let\'s have dinner together!") {
        return "I would love to!"
    };
};

console.log(sayHiToHeadphonedRoommate("Let\'s have dinner together!"));


