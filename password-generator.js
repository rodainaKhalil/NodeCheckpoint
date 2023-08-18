//Installed npm
var passwordGenerator = require('generate-password');

//Function that generates random password
function generateRandomPassword() {
    var password = passwordGenerator.generate({
        length: 10,          
        numbers: true,       
        symbols: true,       
        uppercase: true,     
        lowercase: true,     
    });

    //Printing & returning generated password
    console.log('Generated Password:', password);
    return password;
}

//Calling the funtion
var randomPassword = generateRandomPassword();