const ssbKeys = require('ssb-keys');
const ssb = require('./server');

module.exports = {
  generateKey: async () => {
    return ssbKeys.generate();
  },
};
