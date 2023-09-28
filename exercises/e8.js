import { data } from "../data/data";

// SPACE DATA EXERCISE 8
// Return a Planet name by a given moon name
// Return example: 'Planet Name'

export function findPlanetNameByMoon(data, moonName) {
  let planetsWithMoon = data.planets.filter(planet => {    
    if (planet.moons && Array.isArray(planet.moons)) {      
      return planet.moons.includes(moonName);    
    }    
    return false;
  });  
  if (planetsWithMoon.length > 0) {    
    return planetsWithMoon[0].name;
  } 
  return null;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
