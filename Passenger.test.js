
const Passenger = require("./Passenger");
const Person = require("./Person")



describe('Passenger Class',() => {


    
    test('is an instance of Person class', ()=> {

        const passenger1 = new Passenger("Bob")


        expect(passenger1 instanceof Person).toBe(true);
    })


    test('has a name', ()=> {

        const passenger2 = new Passenger("Billy")


        expect(passenger2).toHaveProperty('name');
    })
    

})
