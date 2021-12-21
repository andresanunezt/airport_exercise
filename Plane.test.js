const Person = require('./Person');
const Plane = require('./Plane')

describe('Plane Class', () => {

    const plane1 = new Plane(Math.random(),"Miami", "New York City");
    

    // Person.all.forEach(Plane.addPilots())
    
    test('going to nyc', () => {
        expect(plane1.destination).toBe("New York City")
    }) 

    test('addPassanger method adds Passanger', () => {

        plane1.addPassenger(personTest)

        expect(plane1.passengers.length).toBeGreaterThan(0);

    })

    test('add Pilots', () => {

        expect(plane1.addPilots.length).toBe(2)

    })
})