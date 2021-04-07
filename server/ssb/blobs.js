const { throws } = require('assert');
var fs = require('fs');
var pull = require('pull-stream');
var toPull = require('stream-to-pull-stream');

const postUploadFile = (sbot, image) =>
  new Promise((resolve, reject) => {
    /* TODO: Use sharp to resize */
    image.file
      .then(({ filename, mimetype, createReadStream }) => {
        pull(
          toPull.source(createReadStream()),
          sbot.blobs.add(function (err, hash) {
            if (err) reject(err);
            else
              resolve({
                hash,
                filename,
                type: mimetype,
                size: image.size,
              });
          })
        );
      })
      .catch((err) => {
        reject(err);
      });
  });

module.exports = postUploadFile;
