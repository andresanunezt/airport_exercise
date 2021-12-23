const Crew = require("./Crew");
const Passenger = require("./Passenger");
const Person = require("./Person")




describe('Crew Class',() => {


    const crewMember1 = new Crew("Billy", "Pilot")
    const crewMember2 = new Crew("Bob", "Flight Attendant")

    console.log("Crew Objects:",crewMember1, crewMember2)

    test('is an instance of Person class', ()=> {

        


        expect(crewMember1 instanceof Person).toBeTruthy();
        expect(crewMember1 instanceof Crew).toBeTruthy()
        expect(crewMember1 instanceof Passenger).toBeFalsy();
    })
    
    test('has a role', () => {

        expect(crewMember1).toHaveProperty('role')

    })


    test('can say they work there', () => {

        expect(crewMember1.workHere()).toBe(`I work here... I am a ${crewMember1.role}`)
        expect(crewMember2.workHere()).toBe(`I work here... I am a ${crewMember2.role}`)


    })




    test('has a greeting', () => {

        expect(crewMember1.greeting()).toBe("Can't wait to take off!")
        expect(crewMember2.greeting()).toBe("Fasten your seatbelt!")

    })

})