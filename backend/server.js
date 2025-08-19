const http = require('http');
const app = require('./app');
const { Console } = require('console');
const port = process.env.PORT || 7000;

const server = http.createServer(app);

server.listen(port,()=>{
    console.log(`server is listning on port  ${port}`);
});