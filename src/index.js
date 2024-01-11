const dna = (string) => {
  
  if (string === ''){
    return false;
  }

  for (let count = 0; count <= string.length; count += 1) {
    console.log(string[count])
    if (string[count] === 'A') {
      string[count] = 'T';
    }

    // if (string[count] === 'T') {
    //   string[count] = 'A';
    // }
    // return string[count]
  }

  return string;
};
  
module.exports = {
  dna,
};