import { data } from "../data/data";

// SPACE DATA EXERCISE 10
// Return a given asteroid object of data
// Return example: { key1: value1, key2: value2, ... , keyN: valueN }

export function getAsteroidDataByName(data, asteroidName) {
  return data.asteroids
  .filter((asteroid) => asteroid.name === asteroidName)[0];  
}

// OR
// export function getAsteroidDataByName(data, asteroidName) {
//   const asteroidData = data.asteroids.filter(function(asteroid) {
//     return asteroid.name === asteroidName;
//   })[0];
//   return asteroidData;
// }

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
