var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/uppercase.html'
};
getHTML(requestOptions,function(html) {
  console.log(html.toUpperCase());
})