import fs from 'fs';

// Approach using Composition
// Characterized bu an 'has a' relationship between two classes
// MatchReader has a reference to CsvFileReader

export class CsvFileReader {
  data: string[][] = [];

  constructor(public filename: string) {}

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
      });
  }
}

// split - creates an array where each line of the csv file is an item
// map 1 + split 2 - array of each row of the csv file, where each item of this array is splitted by a comma
