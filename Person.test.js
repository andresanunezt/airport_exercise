
const Person = require('./Person')

    const passenger0 = new Person("Andres", "Passenger", "American")
    const passenger1 = new Person("Dan", "Passenger", "American")
    const pilot1 = new Person("Jeff", "Pilot", "American")
    const pilot2 = new Person("Jin", "Pilot", "American")

    passenger0.addBag("The Louis")
    passenger1.getTicket("Ticket")


    describe('Person Class', () => {

    
    test('has bags property', () => {
        expect(passenger0).toHaveProperty('bags');
    }) 

    test('has passport property', () => {
        expect(passenger0).toHaveProperty('passport');
    }) 

    test('can add a bag', () => {
        expect(passenger0.bags.length).toBeGreaterThan(0);
    }) 

    test('can get a ticket', () => {
        expect(passenger1.tickets.length).toBeGreaterThan(0);
    })

    

    test('either a passanger or a pilot', () => {
        expect(passenger0.role).toBe('Passenger');
        expect(pilot1.role).toBe('Pilot');
    })

    
})