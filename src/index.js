const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    // write your solution here
    const spaceMorse = '**********'
    const arrStr = expr.split(spaceMorse);
    let arrEnd = [];
    for (let i = 0; i < arrStr.length; i ++) {
        arrEnd.push(convertArrToWord(convertStrToArr(converToFullWord(arrStr[i]))));
    }
    return arrEnd.join(' ');
}

function converToFullWord (str) {
    if (str.length % 10 == 0) {
        return str;
    } else if (str.length < 10) {
        return (('0'.repeat(10 - str.length)) + str);
    } else {
        return ('0'.repeat(10 - (str.length % 10)) + str)
    }
}

function convertStrToArr (str) {
    const max = str.length / 10;
    let arr = [];
    for (let i = 1; i <= max; i++) {
        arr.push(str.slice((i * 10 - 10),  (i * 10)));
    }
    return arr
}

function convertStrToMorse (str) {
    let string = '';
    for (let i = 0; i < str.length; i = i + 2){
        if ((str[i] + str[i + 1]) == '10') {
           string = string + '.'     
        } else if ((str[i] + str[i + 1]) == '11') {
            string = string + '-'
        };
    }
    return string
}

function convertMorseToSymbol (str) {
    return MORSE_TABLE[str];
}

function convertArrToWord (arr) {
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        str = str + convertMorseToSymbol(convertStrToMorse(arr[i]));
    }
    return str
}






module.exports = {
    decode
}