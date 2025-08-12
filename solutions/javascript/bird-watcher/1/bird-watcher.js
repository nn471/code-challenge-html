// @ts-check
//
// The line above enables type checking for this file. Various IDEs interpret
// the @ts-check directive. It will give you helpful autocompletion when
// implementing this exercise.

/**
 * Calculates the total bird count.
 *
 * @param {number[]} birdsPerDay
 * @returns {number} total bird count
 */
export function totalBirdCount(birdsPerDay) {
  let countedBirds = 0;
  for(let i = 0;i<birdsPerDay.length;i++)
    {
        countedBirds += birdsPerDay[i];
    }
  return countedBirds;
  throw new Error('Remove this line and implement the function');
}

/**
 * Calculates the total number of birds seen in a specific week.
 *
 * @param {number[]} birdsPerDay
 * @param {number} week
 * @returns {number} birds counted in the given week
 */
export function birdsInWeek(birdsPerDay, week) {
      let countedBirds = 0;
let startPoint
  let endPoint
  if(week>0){
  startPoint = (week-1)*7;
  endPoint = startPoint+7
  }
    else{
        throw new Error('week can`t be less than 1');
    }
  for(let i=startPoint;i<endPoint;i++)
    {
              countedBirds += birdsPerDay[i];
      //console.log(birdsPerDay[i])
    }
  return countedBirds;
}

/**
 * Fixes the counting mistake by increasing the bird count
 * by one for every second day.
 *
 * @param {number[]} birdsPerDay
 * @returns {void} should not return anything
 */
export function fixBirdCountLog(birdsPerDay) {
  for(let i = 0; i<birdsPerDay.length; i+=2)
    {
    birdsPerDay[i]++;
      }
  return birdsPerDay
  throw new Error('Remove this line and implement the function');
}
