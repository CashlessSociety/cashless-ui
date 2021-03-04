const Sentry = require('@sentry/node');
require('dotenv').config();

let sentry;

if (process.env.NODE_ENV === 'production') {
  const SENTRY_DSN =
    process.env.SENTRY_DSN ||
    'https://e68dbc1c822647c28af109d194d2882f@o453511.ingest.sentry.io/5442376cashless-lr';
  if (SENTRY_DSN) {
    Sentry.init({
      dsn: SENTRY_DSN,
    });
    sentry = Sentry;
  }

  process.on('unhandledRejection', (reason, _promise) => {
    console.error('unhandledRejection', reason);
    if (sentry) {
      Sentry.captureException(new Error(reason.toString()));
    }
    setTimeout(() => {
      console.log('Harakiri because of unhandledRejection');
      process.exit(1);
    }, 1000);
  });

  process.on('uncaughtException', err => {
    console.error('uncaughtException', err.message);
    if (sentry) {
      Sentry.captureException(err);
    }
    setTimeout(() => {
      console.log('Harakiri because of uncaughtException');
      process.exit(1);
    }, 1000);
  });
}

module.exports.sentry = sentry;
