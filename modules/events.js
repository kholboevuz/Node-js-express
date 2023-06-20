// const Events  = require('events')

// class Logger extends Events {
//     log(a , b) {
//         this.emit('calculate' , a+b)
//     }
// }

// const logger  = new Logger()

// logger.on('calculate' , (data) =>{
//     console.log(data);
// })

// logger.log(10 , 20)


const Events  = require("events")

class Logger extends Events {
    log(a , b){
        this.emit('calculate' , a + b);
    }
}

const logger = new Logger()

logger.on('calculate' , (data) =>{
    console.log(data)
})

logger.log(50 , 150)