const code = { a: '1', e: '2', i: '3', o: '4', u: '5' };

const encode = (string) => {  
  const stringSlipted = string.split('');
  const encodeArray = [];  
  for (stringIndex in stringSlipted) {
    let applyCode = false;
    for (codeKey in code) {
      if (codeKey === stringSlipted[stringIndex]) {
        encodeArray.push(code[codeKey]);
        applyCode = true;
      }
    }
    if (applyCode === false) {
      encodeArray.push(stringSlipted[stringIndex])
    }
  }
  return encodeArray.join('');
}

const decode = (string) => {  
  const stringSlipted = string.split('');
  const encodeArray = [];  
  for (stringIndex in stringSlipted) {
    let applyCode = false;
    for (codeKey in code) {      
      if (stringSlipted[stringIndex] === code[codeKey]) {
        encodeArray.push(codeKey);        
        applyCode = true;
      }
    }
    if (applyCode === false) {
      encodeArray.push(stringSlipted[stringIndex])
    }
  }
  return encodeArray.join('');
}


// console.log(encode('Teste a propriedade unica'));
// console.log(decode('T2st2'));

module.exports = { encode, decode };