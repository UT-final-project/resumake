const { config } = require('dotenv');
const { connect, connection } = require('mongoose');


module.exports = () => {
  // Invoking the dotenv config
  // const envar = config(); 
  // if (envar.error) {
  //   throw envar.error;
  // }

  connect(process.env.MONGODB_URI || "mongodb://localhost/resumeDB", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
    connectTimeoutMS: 10000,
  })

    // Mongoose connection lifecycles
    .then(() => {
      console.log('///////////', 'Connection established with MongoDB');
    })
    .catch(error => {
      connection.on('connected', () => {
        console.log('///////////', 'Mongoose connected to DB Cluster');
      })

      connection.on('error', (error) => {
        console.error(error.message);
      })

      connection.on('disconnected', () => {
        console.log('///////////', 'Mongoose Disconnected');
      });
    });

  // Kill the database connection if the app is stopped
  process.on('SIGINT', function () {
    connection.close(function () {
      console.log('///////////', 'Mongoose disconnected on app termination');
      process.exit(0);
    });
  });
};
