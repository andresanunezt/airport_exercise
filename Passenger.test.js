
const Passenger = require("./Passenger");
const Person = require("./Person")

console.log(Person.all)

describe('Passenger Class',() => {

    test('is an instance of Person class', ()=> {

        const passenger1 = new Passenger("Bob")


        expect(passenger1 instanceof Person).toBe(true);
    })
    

})
