
var https = require ('https');
module.exports = function (options, callback) {

    https.get(options, function(response){
      response.setEncoding('utf8');
      var buffer = '';
      response.on('data', function(chunk){
        if(chunk){
            buffer = buffer + chunk;
        }
        console.log('Chunk Received.Length:', chunk.length);

      });
      response.on('end', function() {
        console.log('Response stream complete.');
        callback (buffer);
      });
    });

}



