
var https = require ('https');
module.exports = function getHTML (options, callback) {

    https.get(options, function(response){
      response.setEncoding('utf8');
      var buffer = '';
      response.on('data', function(data){
        if(data){
            buffer = buffer + data;
        }
        console.log('Chunk Received.Length:', data.length);
        callback (buffer);
      });
      response.on('end', function() {
        console.log('Response stream complete.');
      });
    });

}



