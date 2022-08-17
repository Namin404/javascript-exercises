const number = Math.floor(Math.random() * 1000)

const repeatString = function(string, num) {

    if (num < 0) {
        return 'ERROR';
    }

    if (string == '') {
        return '';
    }

    let phrase = `${string}`.repeat(num);
    return phrase;

};



repeatString('hey', number)

// Do not edit below this line
module.exports = repeatString;


// Create a variable to hold the string you're going to return, create a loop that 
// repeats the given number of times and add the given string to the result on each loop


