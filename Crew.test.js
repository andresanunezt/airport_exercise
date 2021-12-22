const Crew = require("./Crew");
const Passenger = require("./Passenger");
const Person = require("./Person")




describe('Crew Class',() => {


    const crewMember1 = new Crew("Billy")
    test('is an instance of Person class', ()=> {

        


        expect(crewMember1 instanceof Person).toBeTruthy();
        expect(crewMember1 instanceof Crew).toBeTruthy()
        expect(crewMember1 instanceof Passenger).toBeFalsy();
    })
    
    test('has a role', () => {

        expect(crewMember1).toHaveProperty('role')

    })


    test('can say they work there', () => {

        expect(crewMember1.workHere()).toBe('I work here...')

    })

    test('can say they work there', () => {

        expect(crewMember1.workHere()).toBe('I work here...')

    })

})