const techList = (arrayList, name) => {
  if(arrayList.length === 0) return 'Vazio!';
  const getArrayList = arrayList.sort();
  const newArrayList = [];
  for(indexValue of getArrayList) {
    const newObj = {name: name, tech:indexValue};
    newArrayList.push(newObj);
  }
  return newArrayList;
}

module.exports = techList;