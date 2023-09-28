/**
 * SPACE DATA EXERCISE 18
 * Return the year with the greatest number of Asteroids discoveries
 * Return example: 1902
 */

export function getGreatestDiscoveryYear(data) {
  let frequency = {};    //created an empty object to store discoveries for each year 
  for (let asteroid of data.asteroids) {    
    let year = asteroid.discoveryYear;    
    frequency[year] = frequency[year] ? frequency[year] + 1 : 1;
  }   
   let greatestYear = null;
   let greatestFrequency = 0;   
   for (let year in frequency) {    
     let currentFrequency = frequency[year];     
     if (currentFrequency > greatestFrequency) {
       greatestYear = year;
       greatestFrequency = currentFrequency;
     }
   }   
   greatestYear = Number(greatestYear);  
  return greatestYear;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-18"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
