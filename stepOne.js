// first funciton getAndPringHTMLChunks will untilize the https library to GET a given URL
//This funciton should console.log each chunk of data as it is recieved
//need to invoke/call the function

var https = require('https');

function getAndPrintHTMLChunks () {

  var requestOptions = {
    host:'sytantris.github.io',
    path:'/http-example/step1.html'
  };

  https.get(requestOptions, function(response)) {

    response.setEncoding('utf8');

    response.on('data', function (data) {
      console.log('Chunk Recieved. Length:', data.length);
    });

    response.on('end', function() {
      console.log('Response stream complete.');
    });
  }
}
getAndPrintHTMLChunks();
