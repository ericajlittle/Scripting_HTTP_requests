var https = require('https');

function getAndPrintHTML(options) {


  https.get(options, function(response) {

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


var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step3.html'
};

getAndPrintHTML(requestOptions);