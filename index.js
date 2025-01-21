const fs = require('fs');
const path = require('path');

const pathsToDelete = [
  path.join('src', 'Counter.sol'),
  path.join('test', 'Counter.t.sol'),
  path.join('script', 'Counter.s.sol'),
];

const deleteFiles = (files) => {
  files.forEach((file) => {
    if (fs.existsSync(file)) {
      fs.unlink(file, (err) => {
        if (err) {
          console.error(`Failed to delete ${file}:`, err.message);
        } else {
          console.log(`Deleted: ${file}`);
        }
      });
    } else {
      console.log(`File not found: ${file}`);
    }
  });
};
module.exports = {deleteFiles};

