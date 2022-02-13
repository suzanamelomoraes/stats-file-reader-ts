import fs from 'fs';
import { dateStringToDate } from './utils';
import { MatchResult } from './MatchResult';

// Tuple
type MatchData = [Date, string, string, number, number, MatchResult, string];

export class CsvFileReader {
  // update data: string[][] - note MatchData tuple is already an array, so no need two [][]
  data: MatchData[] = [];

  constructor(public filename: string) {}

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        // tell what the content is, in this case a string, otherwise it will return a buffer
        encoding: 'utf-8',
      })
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');
      })
      .map(this.mapRow);
  }

  // isolated custom logic specific to football.csv file
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

// split - creates an array where each line of the csv file is an item
// map 1 + split 2 - array of each row of the csv file, where each item of this array is splitted by a comma
// map 2 - update each item of each row wherever it is necessary - convert into the appropriate types
