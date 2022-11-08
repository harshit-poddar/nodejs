const EventEmitter = require('events')

class Logger extends EventEmitter
{
    log(msg)
    {
        console.log(msg);

        //raise an event
        this.emit('Message Logged',{id:1, url: "http://xyz.com"});

    }
}


module.exports = Logger