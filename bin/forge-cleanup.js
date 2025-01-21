#!/usr/bin/env node
const {deleteFiles} = require('../index');
const pathsToDelete = [
  'src/Counter.sol',
  'test/Counter.t.sol',
  'script/Counter.s.sol'
];
function main(arrOfFilesPath) {
  deleteFiles(arrOfFilesPath);
}
main(pathsToDelete); 
