/* eslint-disable global-require */
/* eslint-disable no-undef */
const path = require('path');

process.chdir(path.join(__dirname, 'somke/template'));

describe('builder-webpack test case', () => {
  require('./unit/webpack-base-test');
});
