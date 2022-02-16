import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';

// Approach using Composition
// Characterized bu an 'has a' relationship between two classes
// MatchReader has a reference to CsvFileReader

// Tuple
type MatchData = [Date, string, string, number, number, MatchResult, string];

interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  matches: MatchData[] = [];
  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map((row: string[]): MatchData => {
      return [
        dateStringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MatchResult,
        row[6],
      ];
    });
  }
}

// Update each item of each row - convert into the appropriate types
// Tuple that match football.cvs data = [Date, string, string, number, number, MatchResult, string];
