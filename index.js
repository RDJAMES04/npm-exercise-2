const process = require('process');
const args = process.argv;
args.splice(0, 2); 
const joiningVowels = args.join(' ');
let vowelsCount = 0;

for (let i = 0; i <= joiningVowels.length - 1; i++) {
    if (joiningVowels[i].toLowerCase() === 'a' || joiningVowels[i].toLowerCase() === 'e' || joiningVowels[i].toLowerCase() === 'i' || joiningVowels[i].toLowerCase() === 'o' ||joiningVowels[i].toLowerCase() === 'u') {
      vowelsCount++;
    }
}

console.log("number of arguments is " + args.length);

console.log("number of vowels " + vowelsCount);
