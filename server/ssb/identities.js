const ssbKeys = require('ssb-keys');
module.exports = {
  generateKey: () => ssbKeys.generate(),
  publishAs: async (ssb, publishData) =>
    new Promise((resolve, reject) =>
      ssb.identities.publishAs(publishData, (err, data) => {
        if (err) reject(err);
        else resolve(data);
      })
    ),
};
