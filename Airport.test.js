
const Airport = require('./Airport')

airport1 = new Airport("LaGuardia", "New York City")

describe('Airport Class', () => {

test('has a location', () => {

    expect(airport1).toHaveProperty('location')

})

test('have a terminals array', () => {
    expect(Array.isArray(airport1.terminals)).toBeTruthy();
    

})




})