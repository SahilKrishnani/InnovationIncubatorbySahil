Set Up a New Node.js Project:
mkdir simple-server
cd simple-server
npm init -y

Create a Server with the http Module:
Create an index.js file and add the following code to create a basic HTTP server:
// index.js

const http = require('http');

// Define the hostname and port
const hostname = '127.0.0.1';
const port = 3000;

// Create an HTTP server
const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

// Start the server
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

Run the Server:
node index.js

Visit the Server:
Open your web browser and navigate to http://127.0.0.1:3000 to see the message "Hello, World!".
