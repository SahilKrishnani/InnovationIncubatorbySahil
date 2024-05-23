Set Up the Project:
If not already done, set up a new Node.js project as described previously.

Install fs:
The fs module is built-in, so no need to install it. You can use it directly.

File Operations in index.js:
Add the following code to demonstrate basic file operations:
const fs = require('fs');
const path = require('path');

// Define file paths
const filePath = path.join(__dirname, 'example.txt');

// Write to a file
fs.writeFile(filePath, 'Hello, World!', (err) => {
  if (err) {
    return console.error('Error writing file:', err);
  }
  console.log('File written successfully');

  // Read from the file
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      return console.error('Error reading file:', err);
    }
    console.log('File contents:', data);

    // Append to the file
    fs.appendFile(filePath, '\nAppended text.', (err) => {
      if (err) {
        return console.error('Error appending file:', err);
      }
      console.log('File appended successfully');

      // Read from the file again
      fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
          return console.error('Error reading file:', err);
        }
        console.log('File contents after appending:', data);

        // Delete the file
        fs.unlink(filePath, (err) => {
          if (err) {
            return console.error('Error deleting file:', err);
          }
          console.log('File deleted successfully');
        });
      });
    });
  });
});

Run the Code:
Use node index.js to execute the file operations:
node index.js
