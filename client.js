const PORT = 3000;
const ADDR = 'localhost';

const net = require('net');
const client = new net.Socket();

client.connect(PORT, ADDR, function() {
	console.log('connected to', PORT, ADDR);
});

client.write('Hi from the client');

client.on('x', function(x) {
    console.log(x);
});

client.close();
