
const Airport = require('./Airport')
const Plane = require('./Plane')




describe('Airport Class', () => {
airport1 = new Airport("LaGuardia", "New York City")

test('has a location', () => {

    expect(airport1).toHaveProperty('location')

    

})

test('have a terminals array', () => {
    expect(Array.isArray(airport1.terminals)).toBeTruthy();
    

})


test('can add a plane', () => {
    const plane = new Plane("777")
    const MIA = new Airport("MIA", "Miami")
    MIA.addPlane(plane)
    expect(Array.isArray(airport1.terminals)).toBeTruthy();
    

})






})