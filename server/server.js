const express = require ('express');
const path = require('path');
const cors = require ('cors');
const apiRouter = require('./routes');

let app = express();

app.use(cors());
app.use(express.json());
app.use (express.urlencoded({extended: false}));

app.use('/api', apiRouter);

app.use(express.static("client"));

//static middleware
//app.use(express.static(path.join(__dirname, '../client')));

app.listen(3000);