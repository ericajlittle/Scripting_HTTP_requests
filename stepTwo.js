//create getAndPringHTML function
//this function should use a buffering technique to append each chunk of data to a variable as recieved
//then console.log the data
//

var https = require('https');

function getAndPrintHTML() {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  }


  https.get(requestOptions, function(response) {

    response.setEncoding('utf8');
    var results = "";
    response.on('data', function (data) {
      results += data;
    });

    response.on('end', function() {
      console.log(results);
    });
  });
}
getAndPrintHTML();