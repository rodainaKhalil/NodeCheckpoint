const fs = require('fs');

// Writing File
fs.writeFile('./welcome.txt', 'Hello Node',  () => {
    console.log('file was written');
});

// Reading File
fs.readFile('./welcome.txt', (err, data) => {
    if (err) {
        console.log(err);
    }
    console.log(data.toString());
});





