'use strict';

const fs = require('fs');
const path = require('path');

const read = (dirPath) => {
  const files = fs.readdirSync(dirPath);

  files.forEach((name) => {
    const fullPath = path.join(dirPath, name);

    if (fs.lstatSync(fullPath).isDirectory()) {
      read(fullPath);
    } else if (name.match(/^.*\.test\.js$/)) {
      require(fullPath);
    }
  });
};

read(path.join(__dirname, '../algorithms'));
