module.exports = function countCats(matrix) {
  
  return matrix.reduce((count, elem) => count + elem.filter(val => val === '^^').length, 0);
  
};
