
const Bag = require('./Bag')

const bag1 = new Bag(Math.random(), "Andres", false)
const bag2 = new Bag(Math.random(), "Andres", true)
describe('Bag Class', () => {

    test('is either checked or carry on',() => {

    expect(bag1.carryOn).toBeTruthy()
    expect(bag1.checked).toBeFalsy()

    expect(bag2.carryOn).toBeFalsy()
    expect(bag2.checked).toBeTruthy()
    })

    test('has an owner',() => {

        expect(bag1.passenger).not.toBeNull()
        
        })


})