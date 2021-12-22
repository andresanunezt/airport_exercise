const Person = require('./Person');

class Passenger extends Person {

    constructor(name, seatNumber) {
            super(name)

            this.passport = Math.random()
            this.tickets = []
            this.seatNumber


            Person.all.push(this)


    }


}



module.exports = Passenger