const http = require('http');
const app = require('./app');
const connectDB = require('./config/db');
const port = process.env.PORT || 3000

const server = http.createServer(app);

connectDB();

server.listen(port , ()=>{
    console.log('Server is runing on port '+port);
})