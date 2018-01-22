// https module be required
var https = require ('https');

function getAndPrintHTML(options) {

  https.get(options, function(response){
    // set encoding of received data to UTF-8
    response.setEncoding('utf8');
    // create a buffer
    var buffer = '';
      // the callback is invoked when a `data` chunk is received
    response.on('data', function(data){
      // add data into buffer
      if(data){
        buffer = buffer + data;
      }
      console.log('Chunk Received.Length:', data.length);
      console.log(data + '/n');
    });
     // the callback is invoked when all of the data has been received
     // (the `end` of the stream)
    response.on('end', function() {
    console.log('Response stream complete.');
    });

  });
}




  var requestOptions = {
    // domain name
    host: 'sytantris.github.io',
    // resource
    path: '/http-examples/step3.html'
  };

getAndPrintHTML(requestOptions);


