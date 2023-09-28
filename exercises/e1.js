import { data } from "../data/data";

// SPACE DATA EXERCISE 1
// Return an array of all Planets' names
// Return example: ['name1', 'name2', ... , 'nameN']

export function getPlanetNames(data) {
  const planetNames = data.planets;
  const planetArr = planetNames.map(function (pNames) {
  return pNames.name;
});
  return planetArr;
}

//OR with filter method
// export function getPlanetNames(data) {
//   const planet = data.planets;
//   const allPlanetsNames = planet.filter(function(a) {
//     return a.names;
//   });
//   return allPlanetsNames; 
//     }



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-1"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
