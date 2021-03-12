const nodemailer = require('nodemailer');
const { encrypt } = require('./crypto');

const {
  NODE_ENV,
  MAIL_HOST,
  MAIL_NAME,
  MAIL_PASS,
  MAIL_USER,
  MAIL_PORT,
  MAIL_SUBJECT,
  MAIL_URL,
} = process.env;
const isDev = NODE_ENV === 'development';

module.exports = async (email, secret) => {
  if (email.split('@').length < 2) throw new Error('Must provide valid email');
  /* Check if keys are valid? */
  const secretToHash = `${secret.publicKey}~~${secret.privateKey}~~${email}`;
  const hash = encrypt(secretToHash);
  const token = `${hash.content}+${hash.iv}`;
  let testAccount;
  if (isDev) {
    /* Get test account: https://ethereal.email/create */
    testAccount = await nodemailer.createTestAccount();
    console.log('ethereal.email test account:', testAccount);
  }

  const transporter = nodemailer.createTransport({
    host: isDev ? testAccount.smtp.host : MAIL_HOST,
    port: isDev ? testAccount.smtp.port : MAIL_PORT,
    auth: {
      user: isDev ? testAccount.user : MAIL_USER,
      pass: isDev ? testAccount.pass : MAIL_PASS,
    },
  });

  let message = {
    from: isDev
      ? 'Nodemailer <example@nodemailer.com>'
      : `${MAIL_NAME} <${MAIL_USER}>`,
    to: email,
    subject: isDev ? 'Test email' : MAIL_SUBJECT,
    text: `${isDev ? 'http://localhost:3000/login' : MAIL_URL}?secret=${token}`,
    html: `${isDev ? 'http://localhost:3000/login' : MAIL_URL}?secret=${token}`,
    amp: `<!doctype html>
    <html ⚡4email>
      <head>
        <meta charset="utf-8">
        <style amp4email-boilerplate>body{visibility:hidden}</style>
        <script async src="https://cdn.ampproject.org/v0.js"></script>
        <script async custom-element="amp-anim" src="https://cdn.ampproject.org/v0/amp-anim-0.1.js"></script>
      </head>
      <body>
        ${isDev ? 'http://localhost:3000/login' : MAIL_URL}?secret=${token}
      </body>
    </html>`,
  };
  let info = await transporter.sendMail(message);
  if (isDev) {
    console.log('Sent e-mail information:', info);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  }
  return info.accepted.length > 0
    ? /* Maybe return the full url? */
      // ? `${isDev ? 'http://localhost:3000/login' : MAIL_URL}?secret=${token}`
      token
    : null;
};
