const passwordField = document.getElementById('generation-field');

const generateBtn = document.getElementById('generate-button');

const noNumbersBtn = document.getElementById('noNumbers');
const copyPasswordBtn = document.getElementById('noNumbers');

var password ='';
let i = 0;
let noOn = 0;


const newChar = (noOn) => {
    let x = Math.floor(Math.random() * 93) + 33;
    if(noOn === 0) 
    return String.fromCharCode(x);

    else while(x >= 48 && x <= 57)
    x = Math.floor(Math.random() * 93) + 33;

    return String.fromCharCode(x);
}

const generate = () => {
    while(i < 15) {
        password += newChar(noOn);
        i++;
    }
    passwordField.textContent = password;
    i = 0;
    password = '';
}

const noNumb = () => {
    if(noOn === 0) {
        noOn = 1;
        noNumbersBtn.style.color = "black";
    }
    else {
        noOn = 0;
        noNumbersBtn.style.color = "#FFFFFF";
    }
}

const copy = () => {
navigator.clipboard.writeText(passwordField.textContent);
alert("Copied the text: " + passwordField.textContent);
}

//33 - 126
//no from 48-57