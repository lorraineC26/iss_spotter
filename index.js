//  run our main fetch function

const { nextISSTimesForMyLocation } = require('./iss');

// fetchMyIP((error, ip) => {
//   if (error) {
//     console.log("It didn't work!", error);
//     return;
//   }

//   console.log('It worked! Returned IP:', ip);
// });
/******************************************************************* */

// fetchCoordsByIP("206.176.143.154", (error, coods) => {
//   if (error) {
//     console.log("There's an error!", error);
//     return;
//   }

//   console.log('It worked! Returned coordinates:', coods);
// });
/******************************************************************* */

// fetchISSFlyOverTimes({ latitude: '43.8561002', longitude: '-79.3370188' }, (error, data) => {
//   if (error) {
//     console.log("There's an error!", error);
//     return;
//   }
//   console.log('It worked!', data);
// });
/******************************************************************* */

/**
 * Input:
 *   Array of data objects defining the next fly-overs of the ISS.
 *   [ { risetime: <number>, duration: <number> }, ... ]
 * Returns:
 *   undefined
 * Sideffect:
 *   Console log messages to make that data more human readable.
 *   Example output:
 *   Next pass at Mon Jun 10 2019 20:11:44 GMT-0700 (Pacific Daylight Time) for 468 seconds!
 */
const printPassTimes = function(passTimes) {
  for (const pass of passTimes) {
    const datetime = new Date(0);
    datetime.setUTCSeconds(pass.risetime);
    const duration = pass.duration;
    console.log(`Next pass at ${datetime} for ${duration} seconds!`);
  }
};

nextISSTimesForMyLocation((error, passTimes) => {
  if (error) {
    return console.log("It didn't work!", error);
  }
  // success, print out the deets!
  printPassTimes(passTimes);
});