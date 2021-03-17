const { config } = require('dotenv');
const { connect, connection } = require('mongoose');


module.exports = () => {
  // Invoking the dotenv config
  const envar = config(); 
  if (envar.error) {
    throw envar.error;
  }

  // Connecting to mongo database via environment variables
  // Database, user and password must be created before running
  connect(process.env.DB_URI, {
    dbName: process.env.DB_NAME,
    user: process.env.DB_USER,
    pass: process.env.DB_PASS,
    authSource: process.env.DB_NAME,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
    connectTimeoutMS: 10000,
  })

    // Mongoose connection lifecycles
    .then(() => {
      console.log('///////////','Connection established with MongoDB');
    })
    .catch(error => {
      connection.on('connected', () => {
      console.log('///////////','Mongoose connected to DB Cluster');
      })

      connection.on('error', (error) => {
      console.error(error.message);
      })

      connection.on('disconnected', () => {
      console.log('///////////','Mongoose Disconnected');
      });
    });
  
  // Kill the database connection if the app is stopped
  process.on('SIGINT', function() {
    connection.close(function () {
      console.log('///////////','Mongoose disconnected on app termination');
      process.exit(0);
    });
  });
};
