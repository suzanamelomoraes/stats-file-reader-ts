import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { MatchResult } from './MatchResult';

// Step 1 - while using the interface based's logic
// Create an object that satisfies the ´DataReader'interface
const csvFileReader = new CsvFileReader('football.csv');

// Step 2
// Create an instance of MatchReader and pass in something that satisfies DataReader interface
const matchReader = new MatchReader(csvFileReader);
// Call the load method to execute the transformation and feed matches property
matchReader.load();

// Logic to test classes that shows how many games Manchester United won
let manUnitedWins = 0;

for (let match of matchReader.matches) {
  if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) {
    manUnitedWins++;
  }
}
console.log(`Man United won ${manUnitedWins} games`);
