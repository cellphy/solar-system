/**
 * Make sure to read the e17.md file!
 * For this exercise we want you to make custom `maxBy` and `minBy` methods. 
 * In order to do this it is ok to use any type of FOR loops. 
 * REQUIREMENTS: functions should:
 * * Take an array of things
 * * minBy(): Return the element where the callback function on that element yields the lowest value
 * * maxBy(): Return the element where the callback function on that element yields the highest value
 */

export function minBy(array, cb) {
  if (!array || array.length === 0) {
    return undefined;
  }
    return array.reduce((min, elem) => {    
    const elemValue = cb(elem);
    const minValue = cb(min);
    return elemValue < minValue ? elem : min;
  });
}

export function maxBy(array, cb) {
  if (!array || array.length === 0) {
    return undefined;
  }  
  return array.reduce((max, elem) => {  
    const elemValue = cb(elem);    
    const maxValue = cb(max);    
    return elemValue > maxValue ? elem : max;
  });
}


// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-17"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function