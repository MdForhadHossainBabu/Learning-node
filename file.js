const fs = require('fs');

// reading a file text
const readText = fs.readFileSync('./texts/read.txt', 'utf-8');

// written text 
const writtenText = fs.writeFileSync('./texts/write.txt', readText + "Hello world this is our body index")
console.log(writtenText)