const Person = require('./Person');
const Plane = require('./Plane')

describe('Plane Class', () => {

    const planeToTest = new Plane(Math.random(),"Miami","New York City","United" )
    const passenger0 = new Person("Andres", "Passenger", "American")
    const passenger1 = new Person("Dan", "Passenger", "American")
    const pilot1 = new Person("Jeff", "Pilot", "American")
    const pilot2 = new Person("Jin", "Pilot", "American")
    const flightAttendant = new Person("Diana", "Flight Attendant", "American")
    const peopleArray = Person.all

    console.log(peopleArray)

    peopleArray.forEach((person) => {
        planeToTest.boardPlane(person)
    })
    

    test('have a pilots array', () => {
        expect(typeof planeToTest.flightNumber).toBe("number");
        
    
    })
   

    test('have a pilots array', () => {
        expect(Array.isArray(planeToTest.crew.pilots)).toBeTruthy();
        
    
    })

    test('have flight attendants array', () => {
        expect(Array.isArray(planeToTest.crew.flightAttendants)).toBeTruthy();
        
    
    })

    test('have a passengers array', () => {
        expect(Array.isArray(planeToTest.passengers)).toBeTruthy();
        
    
    })

    test('Leaving from Miami', () => {
        expect(planeToTest.origin).toBe("Miami")
    }) 

    test('going to nyc', () => {
        expect(planeToTest.destination).toBe("New York City")



    }) 


    test('has crew property', () => {

        expect(planeToTest).toHaveProperty('crew')

        

    })

    test('boardPlane method adds passanger to passenger array', () => {
        
        expect(planeToTest.passengers.length).toBeGreaterThan(1);

    })

    test('boardPlane method adds pilots to pilots array', () => {

        expect(planeToTest.crew.pilots.length).toBe(2)



    })

    test('boardPlane method adds flight attendants to pilots array', () => {

        expect(planeToTest.crew.flightAttendants.length).toBe(1)



    })


    
    

    



})