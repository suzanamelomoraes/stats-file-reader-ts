import { CsvFileReader } from './CsvFileReaderGenerics';
import { dateStringToDate } from '../utils';
import { MatchResult } from '../MatchResult';

// Approach using Inheritance
// Characterized bu an 'is a' relationship between two classes
// MatchReader is a CsvFileReader - Inherits all the properties

// Tuple
type MatchData = [Date, string, string, number, number, MatchResult, string];

export class MatchReader extends CsvFileReader<MatchData> {
  mapRow(row: string[]): MatchData {
    return [
      dateStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult,
      row[6],
    ];
  }
}

// Update each item of each row - convert into the appropriate types
// Tuple that match football.cvs data = [Date, string, string, number, number, MatchResult, string];
