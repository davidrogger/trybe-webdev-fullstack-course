type callBackFilter<T> = (value: T, index?: number, array?: Array<T>) => boolean;

function myFilter<T>(array: Array<T>, callback: callBackFilter<T>): Array<T> {
  const filteredArray: Array<T> = [];

  for (let index = 0; index < array.length; index += 1) {
    if (callback(array[index], index, array)) {
      filteredArray.push(array[index]);
    }
  }

  return filteredArray;
}