const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;
const LN2 = 0.693;

module.exports = function dateSample(str) {
  if (typeof str !== "string") return false;

  let parsedStr = parseFloat(str);
  if (parsedStr > 0 && parsedStr < MODERN_ACTIVITY) {
    let year = Math.log(MODERN_ACTIVITY / parsedStr) / (LN2 / HALF_LIFE_PERIOD);
    
    return Math.ceil(year);
  } 
  return false;
};
