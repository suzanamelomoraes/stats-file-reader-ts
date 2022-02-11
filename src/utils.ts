export const dateStringToDate = (dateString: string): Date => {
  // e.g. from football.csv = 28/10/2018
  const dateParts = dateString.split('/').map((value: string): number => {
    return Number(value);
  });
  // new Date(year, month, day)
  // for date January = 0 - received month = value - 1
  return new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);
};
