/* eslint-disable global-require */
const assert = require('assert');

// eslint-disable-next-line no-undef
describe('webpack.base test ', () => {
  const baseConfig = require('../../lib/webpack.base');

  // eslint-disable-next-line no-undef
  it('entry', () => {
    assert.equal(baseConfig.entry.index, '../smoke/template/src/index/index.js');
  });
});
