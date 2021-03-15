const crypto = require('crypto');
const { NODE_ENV, MAIL_SECRET } = process.env;
const isDev = NODE_ENV === 'development';
const privateKey = isDev ? 'vOVH6sdmpNWjRRIqCc7rdxs01lwHzfr3' : MAIL_SECRET;
const algorithm = 'aes-256-ctr';
const iv = crypto.randomBytes(16);

const encrypt = (text) => {
  const cipher = crypto.createCipheriv(algorithm, privateKey, iv);

  const encrypted = Buffer.concat([cipher.update(text), cipher.final()]);

  return {
    iv: iv.toString('hex'),
    content: encrypted.toString('hex'),
  };
};

const decrypt = (hash) => {
  const [content, iv] = hash.split('+');
  const decipher = crypto.createDecipheriv(
    algorithm,
    privateKey,
    Buffer.from(iv, 'hex')
  );
  const decrpyted = Buffer.concat([
    decipher.update(Buffer.from(content, 'hex')),
    decipher.final(),
  ]);

  return decrpyted.toString();
};

module.exports = {
  encrypt,
  decrypt,
};
