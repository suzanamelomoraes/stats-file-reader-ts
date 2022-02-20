import { MatchReader } from './MatchReader';
import { Summary } from './Summary';

// Step 1 - while using the interface based's logic
// Create an object that satisfies the ´DataReader'interface
// const csvFileReader = new CsvFileReader('football.csv'); -> replaced for the shortcut at line 12

// Step 2
// Create an instance of MatchReader and pass in something that satisfies DataReader interface
// const matchReader = new MatchReader(csvFileReader); Adding the shortcut below:
const matchReader = MatchReader.fromCsv('football.csv');

// Call the load method to execute the transformation and feed matches property
matchReader.load();

const summary = Summary.winsAnalysisConsole('Chelsea');
const summaryHTML = Summary.winsAnalysisHtmlReport('Everton');
summary.buildAndPrintReport(matchReader.matches);
summaryHTML.buildAndPrintReport(matchReader.matches);
