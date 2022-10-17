const mongoose = require('mongoose');

const URL = process.env.MONGO_URL || 'mongodb://localhost:27017/test';

mongoose.connect(URL, { 
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on('open', _ => {
  console.log('Conectado a a la base de datos');
}).on('error', err => {
  console.log('Error al conectarse: ', err);
})