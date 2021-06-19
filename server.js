// dependencies
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const path = require('path');

// import routes, helpers, and connection
const routes = require('./controllers');
const helpers = require('./utils/helpers');
const sequelize = require('./config/connection');

// create new sequelize store
const SequelizeStore = require('connect-session-sequelize')(session.Store);

// create the Express App
const app = express();
const PORT = process.env.PORT || 3001;

// set up custom helpers 
const hbs = exphbs.create({ helpers });

// configure session
const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

// middleware to set up session
app.use(session(sess));

// set up template engine to use
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// middleware to parse data and serve static files
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// middleware to set up routes
app.use(routes);

// set up connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on port ${PORT}!`));
});