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
const mocks = require('./mocks')

const ApolloCustomDebugPlugin = {

  // Fires whenever a GraphQL request is received from a client.
  requestDidStart(requestContext) {

    query = requestContext.request.query
    if (!query.includes("Introspection")) {
      console.log('Request started! Query:\n' +
       requestContext.request.query);
    }

    return {

      // Fires whenever Apollo Server will parse a GraphQL
      // request to create its associated document AST.
      parsingDidStart(requestContext) {
        console.log('Parsing started!');
      },

      // Fires whenever Apollo Server will validate a
      // request's document AST against your GraphQL schema.
      validationDidStart(requestContext) {
        console.log('Validation started!');
      },

    }
  },
};

/* TODO: resolve from real ssb datasource
const ssbFlumeAPI = require('./graphql/datasource');

const dataSources = () => ({
    ssbFlumeAPI: new ssbFlumeAPI(),
});*/

/* NB If you are trying to work out how all this 'server' stuff 
    can be accessed on the client's web server pay attention to 
   "proxy": "http://localhost:3001", in 
   ../client/package.json which proxies all server end points
    
   So, eg localhost:3000/graphql -> localhost:3001/graphql
   (the port 3001 is configured in server/www/bin currently) */

const apollo = new ApolloServer({
  typeDefs,
  resolvers, //dataSources,
  plugins: [ ApolloCustomDebugPlugin],
  mocks
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

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
// app.use('/ads', adsRouter);

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
