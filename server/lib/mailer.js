const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
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
  const secretToHash = `${secret.publicKey}+${secret.secretKey}`;
  const hash = encrypt(secretToHash);
  const hashIv = `${hash.content}+${hash.iv}`;
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
  var options = {
    extName: '.hbs',
    viewPath: './',
    layoutsDir: './',
    defaultLayout: 'template',
    partialsDir: './',
  };

  /* TODO:
    https://excellencetechnologies.in/blog/express-nodemailer-sending-mails/
    https://stackoverflow.com/questions/45302010/how-to-use-handlebars-with-nodemailer-to-send-email
    https://stackoverflow.com/questions/56612389/node-js-express-send-email-with-nodemailer-and-nodemailer-handlebars-givin
    transporter.use('compile', hbs(options));
    */

  let message = {
    from: isDev
      ? 'Nodemailer <example@nodemailer.com>'
      : `${MAIL_NAME} <${MAIL_USER}>`,
    to: email,
    subject: isDev ? 'Test email' : MAIL_SUBJECT,
    text: 'For clients with plaintext support only',
    html:
      '<p>For clients that do not support AMP4EMAIL or amp content is not valid</p>',
    amp: `<!doctype html>
    <html ⚡4email>
      <head>
        <meta charset="utf-8">
        <style amp4email-boilerplate>body{visibility:hidden}</style>
        <script async src="https://cdn.ampproject.org/v0.js"></script>
        <script async custom-element="amp-anim" src="https://cdn.ampproject.org/v0/amp-anim-0.1.js"></script>
      </head>
      <body>
        <p>Image: <amp-img src="https://cldup.com/P0b1bUmEet.png" width="16" height="16"/></p>
        <p>GIF (requires "amp-anim" script in header):<br/>
          <amp-anim src="https://cldup.com/D72zpdwI-i.gif" width="500" height="350"/></p>
      </body>
    </html>`,
  };
  let info = await transporter.sendMail(message);
  if (isDev) {
    console.log('Sent e-mail information:', info);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  }
  return info.accepted.length > 0
    ? `${isDev ? 'http://localhost:3000/mail' : MAIL_URL}?secret=${hashIv}`
    : null;
};
