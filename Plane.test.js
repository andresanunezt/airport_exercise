const Plane = require('./Plane')

describe('Plane Class', () => {

    const plane1 = new Plane(Math.random(),"Miami", "New York City");
    test('going to nyc', () => {
        expect(plane1.destination).toBe("New York City")
    }) 
})