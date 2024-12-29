export function pluralize(num: number, words: [string, string, string]): string {
  const numToDecimals = num % 100;
  const numUnits = num % 10;

  const word = numToDecimals >= 11 && numToDecimals <= 15
    ? words[2]
    : numUnits === 1
    ? words[0]
    : [2, 3, 4].includes(numUnits)
    ? words[1]
    : words[2];

  return `${num} ${word}`;
}
