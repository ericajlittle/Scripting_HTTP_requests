var https = require('https');

module.exports = function getHTML(options, callback) {
  https.get(options, function(response) {

    response.setEncoding('utf8');

    var results = "";

    response.on('data', function (data) {
      results += data;
    });

    response.on('end', function() {
       callback(results);
    });
  });

}