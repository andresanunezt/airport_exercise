const Person = require('./Person');

class Passenger extends Person {

    constructor(name, seatNumber) {
            super(name)

            this.passport = "American",
            this.seatNumber = seatNumber,
            this.tickets = []

            


    }


}



module.exports = Passenger