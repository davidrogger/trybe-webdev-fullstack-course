const myRemove = (arr, item) => {
  const copyArray = arr;
  if(copyArray.indexOf(item) !== -1) {
  copyArray.splice(copyArray.indexOf(item), 1);
  }
  return copyArray;
}

module.exports = myRemove;