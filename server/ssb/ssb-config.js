const configInject = require('ssb-config/inject');
require('dotenv').config();

module.exports = configInject(process.env.CONFIG_FOLDER || 'ssb-cashless', {
  onError: err => {
    // After a while server gets stuck and start throwing errors, but those are
    // usually swallowed, so we just rethrow it to allow process to die and be restarted
    // https://github.com/rogeriochaves/feedless/issues/14
    if (err.toString().includes('stream ended with')) {
      throw err;
    }
  },
  connections: {
    incoming: {
      net: [
        {
          scope: 'public',
          host: '0.0.0.0',
          external: '157.245.245.34',
          transform: 'shs',
          port: process.env.SSB_PORT || 8008,
        },
      ],
    },
    outgoing: {
      net: [{ transform: 'shs' }],
    },
  },
});
