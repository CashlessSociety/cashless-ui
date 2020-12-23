const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const { ApolloServer } = require('apollo-server-express');
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const adsRouter = require('./routes/ads');
const typeDefs = require('./graphql/schema');
const resolvers = require('./graphql/resolvers');

/* TODO: resolve from real ssb datasource
const ssbFlumeAPI = require('./graphql/datasource');

const dataSources = () => ({
    ssbFlumeAPI: new ssbFlumeAPI(),
});*/

const apollo = new ApolloServer({
  typeDefs,
  resolvers, //dataSources,
  mocks: true,
});

let app = express();

apollo.applyMiddleware({ app });
console.log(`Apollo endpoint deployed: ${apollo.graphqlPath}`);

app.set('views', __dirname + '/views'); // general config
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client/public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/ads', adsRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
