const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // Log a message when the server starts listening on port 3000
  console.log('Server is listening on port 3000');

  res.setHeader('Content-Type', 'text/plain');

  if (req.url === '/') {
    // If the URL is "/", respond with "This is Home Page"
    res.end('This is Home Page');
  } else if (req.url === '/about') {
    // If the URL is "/about", respond with "This is About Page"
    res.end('This is About Page');
  } else if (req.url === '/contact') {
    // If the URL is "/contact", respond with "This is Contact Page"
    res.end('This is Contact Page');
  } else if (req.url === '/file-write') {
    // If the URL is "/file-write", write "hello world" to "demo.txt"

    fs.writeFile('demo.txt', 'hello world', (err) => {
      if (err) {
        console.error(err);
        res.statusCode = 500; 
        res.end('Internal Server Error');
      } else {

        res.end('File created and written successfully');
      }
    });
  } else {
    // If the URL is not one of the specified paths, respond with a 404 Not Found
    res.statusCode = 404;
    res.end('404 Not Found');
  }
});

server.listen(3000);
