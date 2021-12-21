class Plane {
	constructor(flightNumber, origin,destination){
		this.flightNumber = flightNumber,
        this.origin = origin,
        this.destination = destination,
		this.passengers = []
        this.pilots = []
	}

	addPassenger(person){
		this.passengers.push(person)
	}
}

module.exports = Plane