// Code your solution in this file!
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

// 1. Return the first two drivers
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
};

// 2. Return the last two drivers
const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
};

// 3. Store both functions in an array
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// 4. Create a fare multiplier function (higher-order)
function createFareMultiplier(multiplier) {
  return function(fare) {
    return fare * multiplier;
  };
}

// 5. Create a fare doubler using createFareMultiplier
const fareDoubler = createFareMultiplier(2);

// 6. Create a fare tripler using createFareMultiplier
const fareTripler = createFareMultiplier(3);

// 7. Select either the first or last two drivers based on the function passed
function selectDifferentDrivers(drivers, driverSelector) {
  return driverSelector(drivers);
}
console.log(returnFirstTwoDrivers(drivers));
console.log(returnLastTwoDrivers(drivers)); 
console.log(selectingDrivers[0](drivers));  
console.log(fareDoubler(10));                
console.log(fareTripler(10));             
console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers)); 
