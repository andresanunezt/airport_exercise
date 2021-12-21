const Person = require('./Person');
const Plane = require('./Plane')

describe('Plane Class', () => {

    const plane1 = new Plane(Math.random(),"Miami", "New York City", "Ryanair");
    
    const passenger0 = new Person("Andres", "Passenger", "American")
    const passenger1 = new Person("Dan", "Passenger", "American")
    const pilot1 = new Person("Jeff", "Pilot", "American")
    const pilot2 = new Person("Jin", "Pilot", "American")
    const peopleArray = Person.all

    peopleArray.forEach((person) => {
        plane1.boardPlane(person)
    })
    
    console.log(peopleArray)
    console.log()

    test('going to nyc', () => {
        expect(plane1.origin).toBe("Miami")
    }) 

    test('going to nyc', () => {
        expect(plane1.destination).toBe("New York City")
    }) 

    test('boardPlane method adds passanger to passenger array', () => {
        
        expect(plane1.passengers.length).toBeGreaterThan(1);

    })

    test('boardPlane method adds pilots to pilots array', () => {

        expect(plane1.pilots.length).toBe(2)

    })

    

    



})