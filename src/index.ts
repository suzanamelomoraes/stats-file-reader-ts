import fs from 'fs';

// fs = module from node to read the file
const matches = fs
  .readFileSync('football.csv', {
    // tell what the content is, in this case a string, otherwise it will return a buffer
    encoding: 'utf-8',
  })
  .split('\n')
  .map((row: string): string[] => {
    return row.split(',');
  });

console.log(matches);
