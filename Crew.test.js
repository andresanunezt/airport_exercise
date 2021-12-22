const Crew = require("./Crew");
const Person = require("./Person")



console.log(Person.all)
describe('Crew Class',() => {


    const crewMember1 = new Crew("Billy")
    test('is an instance of Person class', ()=> {

        


        expect(crewMember1 instanceof Person).toBe(true);
    })
    
    test('has a role', () => {

        expect(crewMember1).toHaveProperty('role')

    })

})