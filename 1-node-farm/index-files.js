const fs = require('fs');

/*
// Blocking, synchronous way
const textIn = fs.readFileSync('./starter/txt/input.txt', 'utf8');
console.log(textIn);

const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on ${Date.now()}`;

// Write to a file synchronously
fs.writeFileSync('./starter/txt/output.txt', textOut);

console.log('File written successfully');
*/

/*
// Non-blocking, asynchronous way
fs.readFile('./starter/txt/start.txt', 'utf8', (err, data1) => {
    if (err) return console.log('Error reading file!');

    fs.readFile(`./starter/txt/${data1}.txt`, 'utf8', (err, data2) => {
        console.log(data2);
        fs.readFile(`./starter/txt/append.txt`, 'utf8', (err, data3) => {
            console.log(data3);

            fs.writeFile('./starter/txt/final.txt', `${data2}\n${data3}`, 'utf8', err => {
                console.log('Your file has been written');
            });
        });
    });
});

console.log('Will read file now...');
*/

