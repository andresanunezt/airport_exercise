const Person = require('./Person');

class Passenger extends Person {

    constructor(name, role, passport) {
            super(name,role,passport)

            this.seatNumber = "999"
            

            


    }


}



module.exports = Passenger