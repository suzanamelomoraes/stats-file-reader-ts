import fs from 'fs';

export class CsvFileReader {
  data: string[][] = [];

  constructor(public filename: string) {}

  read(): void {
    fs.readFileSync(this.filename, {
      // tell what the content is, in this case a string, otherwise it will return a buffer
      encoding: 'utf-8',
    })
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');
      });
  }
}
