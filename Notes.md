\*\* Load, Parse, Analyze and Report process - JS approach

import fs from 'fs';

\*\*\* Load
Obs: fs = module from node to read the file
const matches = fs

\*\*\* Parse
.readFileSync('football.csv', {
Obs: encoding - tell what the content is, in this case a string, otherwise it will return a buffer
encoding: 'utf-8',
})
.split('\n')
.map((row: string): string[] => {
return row.split(',');
});

\*\*\* Analyze
let manUnitedWins = 0;

for (let match of matches) {
if (match[1] === 'Man United' && match[5] === 'H') {
manUnitedWins++;
} else if (match[2] === 'Man United' && match[5] === 'A') {
manUnitedWins++;
}
}

\*\*\* Report
console.log(`Man United won ${manUnitedWins} games`);
