class Person {

    static all = [];

	constructor(name, role, passport){
		this.name = name,
        this.role = role,
        this.passport = passport,
        this.tickets = [],
        this.bags = []

        Person.all.push(this)

	
      
	}

	buyTicket(ticket){
		this.tickets.push(ticket)
	}

    addBag(bag){

        this.bags.push = bag
    }


}

module.exports = Person