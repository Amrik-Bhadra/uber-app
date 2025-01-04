const express = require('express');
const app = express();
const cors = require('cors');
const cookierparser = require('cookie-parser');
const connectToDb = require('./db/db');
connectToDb();
const userRoutes = require('./routes/user.routes');

app.use(cors());  // accept request from everywhere for now (development purpose)
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookierparser());

app.get('/', (req, res)=>{
    res.send('Hello World');
});

app.use('/user', userRoutes);


module.exports = app;
