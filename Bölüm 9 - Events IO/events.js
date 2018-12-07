const event = require('events');
const eventEmitter = new event.EventEmitter();

eventEmitter.on('selamla', () => {
    console.log("hjkhjkhjk");
});

eventEmitter.emit('selamla');