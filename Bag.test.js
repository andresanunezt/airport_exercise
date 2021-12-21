
const Bag = require('./Bag')

const bag1 = new Bag(Math.random(), "Andres", false, 20)
const bag2 = new Bag(Math.random(), "Andres", true, 52)
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


        test('Regular fee or extra fee',() => {

            expect(bag2.fee).toBe("Extra")
            expect(bag1.fee).toBe("Regular")
            
            })

})