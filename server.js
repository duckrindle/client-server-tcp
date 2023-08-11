const PORT = 3000;
const ADDR = 'localhost';

const server = net.createServer(onClientConnection);

server.listen(PORT, ADDR);
console.log('listening on', PORT, ADDR);

sock.on('data',function(data) {
    console.log('data', data);
})

sock.on('close',function() {
    console.log('close');
})

sock.on('error',function(error) {
    console.log('error', error);
})
