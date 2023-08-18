const http = require('http');

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/html');
  res.write('<h1>Hello Node!!!!</h1>\n');
  res.end();
});

//localhost is the default value for 2nd argument
server.listen(3000, 'localhost', () => {
    console.log('listening for requests on port 3000');
});