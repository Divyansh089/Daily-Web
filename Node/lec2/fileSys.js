const fs = require('fs');
let data = 'hello, my name is divyansh patel';
fs.writeFile('data.txt', data, {}, () => {
    console.log('Data stored successfully');
});

fs.readFile('data.txt', (err, data) => {
    try {
        console.log(data.toString());
    } catch (error) {
        console.log(error);
    }
});

let append = "\nI study in Gla University";
fs.appendFile('data.txt', append, () => {
    console.log('Data appended successfully');
})

fs.unlink('data.txt', () => {
    console.log('File deleted successfully');
})