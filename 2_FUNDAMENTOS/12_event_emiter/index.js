const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.on('start', function () {
    console.log('Durante');
})

console.log('Antes')

eventEmitter.emit('start');

console.log('Depois');