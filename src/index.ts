import { MatchReader } from './MatchReader';
import { CsvFileReader } from './CsvFileReader';
import { Summary } from './Summary';
import { WinsAnalysis } from './analyzers/WinsAnalysis';
import { ConsoleReport } from './reportTargets/ConsoleReport';

// Step 1 - while using the interface based's logic
// Create an object that satisfies the ´DataReader'interface
const csvFileReader = new CsvFileReader('football.csv');

// Step 2
// Create an instance of MatchReader and pass in something that satisfies DataReader interface
const matchReader = new MatchReader(csvFileReader);
// Call the load method to execute the transformation and feed matches property
matchReader.load();

const summary = new Summary(new WinsAnalysis('Everton'), new ConsoleReport());
console.log(matchReader.matches);
summary.buildAndPrintReport(matchReader.matches);
