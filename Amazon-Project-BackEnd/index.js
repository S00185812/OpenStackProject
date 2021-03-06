import express from 'express';

import monitors from './routes/monitors';
import pcs from './routes/pc';

import users from './routes/users';
import auth from './routes/auth';

import mongoose from 'mongoose';
import cors from 'cors';

import https from 'https';
import fs from 'fs';

import config from './config'

const app = express();

app.use(cors());

const port = 3000;


// Define the database connecton and connect to it.
// Errors awill be logged to the console.
// this would normally come from a config file

const connectionString = config.connectionString;

mongoose.connect(connectionString, {
  "useNewUrlParser": true,
  "useUnifiedTopology": true,
  'useCreateIndex' : true
}).
catch ( error => {
  console.log('Database connection refused' + error);
  process.exit(2);
})

const db = mongoose.connection;


db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', () => {
  console.log("DB connected")
});


const sslOptions = {
  key: fs.readFileSync("ssl/piercelocal.key"),
  cert: fs.readFileSync("ssl/piercelocal.cert")
};



// Configuring the built-in express body parser middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use('/pcs', pcs);
app.use('/monitors', monitors);
app.use('/users', users);
app.use('/auth', auth);




app.get('/', (req, res) =>
  res.send('hello world, Pierce is using Express this has changed'));

app.all('*', (req, res) => {
  res.status(404).json({
    status: 'fail',
    message: `Can't find ${req.originalUrl} on this server!`
  });
});

app.listen(port, () => console.log(`Example app listening on 
  ${port}!`))


  https.createServer(sslOptions, app).listen(8080, () => 
  console.log('listening on 8080 too, don\'t forget the https'));
