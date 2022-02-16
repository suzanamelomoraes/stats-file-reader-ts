import fs from 'fs';

// Approach using Inheritance
// Characterized bu an 'is a' relationship between two classes
// MatchReader is a CsvFileReader - Inherits all the properties

// Abstract class that used generics to became reusable
export abstract class CsvFileReader<T> {
  // update data: string[][] - note MatchData tuple is already an array, so no need two [][]
  data: T[] = [];

  constructor(public filename: string) {}

  // isolated custom logic specific to football.csv file moved to MatchReader
  abstract mapRow(row: string[]): T;

  // fs = module from nodejs to read the file
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
}

// split - creates an array where each line of the csv file is an item
// map 1 + split 2 - array of each row of the csv file, where each item of this array is splitted by a comma

// example of use: export class MatchReader extends CsvFileReaderGenerics<MatchData>
