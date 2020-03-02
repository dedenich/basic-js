module.exports = function getSeason(date) {
  if (arguments.length === 0) return 'Unable to determine the time of year!';
  if (Object.prototype.hasOwnProperty.call(date, 'getMonth')) throw Error;

  let monthN;

  try {
    monthN = date.getMonth();
  } catch (error) {
    throw error;
  }

  if (monthN < 2 || monthN > 10)
    return "winter";

  if (monthN > 1 && monthN < 5)  
    return "spring";

  if (monthN > 4 && monthN < 8) 
    return "summer";
  if (monthN > 7 && monthN < 11)  
   return "autumn";
};
