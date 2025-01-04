const dotenv = require('dotenv');
dotenv.config();

const http = require('http');
const app = require('./app.js');
const PORT = process.env.PORT || 3000;

const server = http.createServer(app);

server.listen(PORT, ()=>{
    console.log(`Server is listening to port ${PORT}`);
});
