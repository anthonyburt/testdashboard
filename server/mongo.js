const mongoose = require('mongoose');
const env = require('./env/environment');

mongoose.Promise = global.Promise;

const mongoUri = `mongodb://localhost:${env.port}/${env.dbName}`;


function connect() {
    mongoose.set('debug', true)
    return mongoose.connect(mongoUri)
};


module.exports = {
  connect,
  mongoose
};
