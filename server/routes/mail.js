var express = require('express');
const { decrypt } = require('../lib/crypto');

var router = express.Router();

router.get('/:hash', (req, res, next) => {
  const hash = req.params.hash;
  const msg = decrypt(hash);
  console.log('Decrypted message:', msg);
  /* TODO: divide keys into public and private */
  res.json({
    publicKey: msg,
    privateKey: msg,
  });
});

module.exports = router;
