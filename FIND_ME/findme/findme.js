var fs = require('fs');
const { queryObjects } = require('v8');

var test="findme.txt"
var test2="denemeIpsum.txt"



try {  
    var textFile = fs.readFileSync(test2, 'utf8');
  
} catch(e) {
    console.log('Error:', e.stack);
}
let allTheWords = textFile
    .trim() 
    .replace(/\n/g, " ") 
    .split(/\s+/); 
console.log(allTheWords);
console.log(allTheWords.length);