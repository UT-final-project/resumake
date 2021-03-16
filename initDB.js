const { connect, connection } = require('mongoose');
const { config } = require('dotenv');

module.exports = () => {
  config(); //invoking the dotenv config here
  const uri = process.env.DB_URI;
  
  connect(uri, {
         dbName: process.env.DB_NAME,
         user: process.env.DB_USER,
         pass: process.env.DB_PASSWORD,
         useNewUrlParser: true,
         useUnifiedTopology: true,
         useFindAndModify: false,
         useCreateIndex: true
     })
         .then(() => {
             console.log('Connection estabislished with MongoDB');
         })
         .catch(error => {
          connection.on('connected', () => {
            console.log('Mongoose connected to DB Cluster');
          })
      
          connection.on('error', (error) => {
              console.error(error.message);
          })
      
          connection.on('disconnected', () => {
              console.log('Mongoose Disconnected');
          })
         });
  
  process.on('SIGINT', function() {
    mongoose.connection.close(function () {
      console.log('Mongoose disconnected on app termination');
      process.exit(0);
    });
  });
}