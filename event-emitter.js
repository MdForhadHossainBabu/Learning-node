const EventEmiter = require('events');

const myEmitter = new EventEmiter();

// listener

myEmitter.on('birthday', () => {
  console.log("HAPPY BIRTHDAY TO YOU");
});
myEmitter.on('birthday', (gift, nobike) => {
  console.log(`I will send you a ${gift} & ${nobike}`);
});


myEmitter.emit('birthday', 'watch', 'bike');