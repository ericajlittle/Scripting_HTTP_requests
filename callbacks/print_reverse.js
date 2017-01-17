var getHTML = require('../http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};

function printReverse (html) {
  var reverseString = html.split('').reverse().join('');
  console.log(reverseString);
  /* Write your code here! */

}

getHTML(requestOptions, printReverse);
