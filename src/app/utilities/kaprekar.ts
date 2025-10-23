export const kaprekar = (a: number): string => {
  let resultString: string = '';
  if (a.toString().length !== 4) {
    resultString = 'Please enter a 4-digit number';
    return resultString;
  } else if (
    a
      .toString()
      .split('')
      .reduce((acc, current, index, arr) => {
        return current === arr[index + 1] ? acc + 1 : acc;
      }, 1) === 4
  ) {
    resultString += '\nAll digits are the same. Please enter at least two different digits';
    return resultString;
  }

  let max: string = '';
  let min: string = '';
  let result: number = 0;
  resultString += `\nNumber: ${a}`;
  for (let i = 0; i < 7; i++) {
    !max.length
      ? (max = a
          .toString()
          .split('')
          .sort((a, b) => Number(b) - Number(a))
          .join(''))
      : (max = result
          .toString()
          .split('')
          .sort((a, b) => Number(b) - Number(a))
          .join(''));

    !min.length
      ? (min = a
          .toString()
          .split('')
          .sort((a, b) => Number(b) - Number(a))
          .reverse()
          .join(''))
      : (min = result
          .toString()
          .split('')
          .sort((a, b) => Number(b) - Number(a))
          .reverse()
          .join(''));

    resultString += `\nMax: ${Number(max)}, Min: ${Number(min)}`;
    result = Number(max) - Number(min);
    result =
      result < 10
        ? result * 1000
        : result < 100
        ? result * 100
        : result < 1000
        ? result * 10
        : result;

    resultString += `\nSubtraction: ${result}`;
    if (result === 6174) {
      resultString += `\nReached Kaprekar's Constant: 6174 in ${i + 1} iterations.`;
      return resultString;
    }
  }
  return resultString;
};
