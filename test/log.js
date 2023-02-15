'use strict';

const path = require('path');

module.exports = (msg, filename) => {
  const fileName = path.basename(filename);

  const color = '\x1b[1;33m';
  const colorEnd = '\x1b[0m';

  console.log(color + msg + fileName + colorEnd);
};
