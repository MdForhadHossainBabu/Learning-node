const EventEmiter = require('events');

const myEmitter = new EventEmiter();

// listener

myEmitter.on('birthday',async () => {
 await console.log("HAPPY BIRTHDAY TO YOU");
});
myEmitter.on('birthday',async () => {
 await console.log("I will send you a gift");
});


myEmitter.emit('birthday')