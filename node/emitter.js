const { EventEmitter} = require('events')
const logger = new EventEmitter()

logger.on('event1', (...data) => {
    console.log('event one', data)
})
logger.on('event2', (...data) => {
    console.log('event two', data)
})

function log(...messages) {
    //let customLog = console.log.bind(console);
    return console.log.apply(null, messages)
}
log('Hosam')
console.log(logger.eventNames(), logger.listenerCount())
logger.emit('event1', 'hosam', 'menna', 'love')
logger.emit('event2', 'hosam', 'menna', 'love')

class eventClasss extends EventEmitter {
    constructor() {
        super()
        this.onEvent1 = (name, love) => {
            console.log(`Event1 Log 
> ${name} loves ${love}`)
        };
        this.onEvent2 = (log) => {
            console.log('Event2 Log is', log)
        };
        this.addListener('event1', this.onEvent1);
        this.addListener('event2', this.onEvent2)
    }

    tick(whichOne) {
        let data = whichOne ?['hosam', 'menna']:[1996, 'Hosam Elnabawy'];
        this.emit(whichOne?'event1':'event2', ...data)
    }
}

const evcl = new eventClasss();
evcl.tick(true)