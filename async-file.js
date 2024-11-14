const fs = require("fs");



// reading text asynchronously

fs.readFile('./texts/read.txt', 'utf-8', (err, data) => {
  if (err) throw Error();
  console.log(data);
});