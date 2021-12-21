class Plane {
	constructor(flightNumber, origin,destination, airline){
		this.flightNumber = flightNumber,
        this.origin = origin,
        this.destination = destination,
        this.airline = airline,
		this.passengers = []
        this.pilots = []
	}





    boardPlane(person){
		
        if (person.role == "Pilot"){

            this.pilots.push(person)
        }

        if (person.role == "Passenger") {

            this.passengers.push(person)
        }

        
	}
}



module.exports = Plane