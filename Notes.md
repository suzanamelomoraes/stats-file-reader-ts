\*\* Load, Parse, Analyze and Report process - JS approach

import fs from 'fs';

\*\*\* Load
Obs: fs = module from node to read the csv file
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
const homeWin = 'H';
const awayWin = 'A';

Obs: Points to sort - there is a third category - const draw = 'D' - that if included will appear as unused

let manUnitedWins = 0;

for (let match of matches) {
if (match[1] === 'Man United' && match[5] === homeWin) {
manUnitedWins++;
} else if (match[2] === 'Man United' && match[5] === awayWin) {
manUnitedWins++;
}
}

\*\*\* Report
console.log(`Man United won ${manUnitedWins} games`);

\*\*\* Issues to fix in this task

- String comparisons (draw is not included but it exist)
- Source data is hardcoded
- Data array is all strings
- Variable name after a specific team
- Analysis type is fixed
- No ability to output the report in different formats

\*\*\* Tuples
Tuple - very useful to describe fixed nd permanent structure like this data array

1. Define the tuple as a new type
2. Convert the row o strings into the appropriate types
