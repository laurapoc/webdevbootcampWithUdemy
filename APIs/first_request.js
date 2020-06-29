
// const request = require('request');
// request('https://jsonplaceholder.typicode.com/users', (error, response, body) => {
//   console.error('error:', error); // Print the error if one occurred
//   console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   const parsedData = JSON.parse(body);
//   // console.log('body:', body); // Print the HTML for the Google homepage.
//   console.log(parsedData[0]);
//   console.log(parsedData[0].name + " lives in " + parsedData[0].address.city + " city, " + parsedData[0].address.street + " street.");
//   // parsedData.forEach(element => {
//   //   console.log(element.name);
//   // });
// });


// API request with a promise, using 'request-promise' library package:
const rp = require('request-promise');

rp('https://jsonplaceholder.typicode.com/users/1')
.then((body) => {
  const parsedData = JSON.parse(body);
  console.log(parsedData.name);
})
.catch((err) => {
  console.log(err);
});


