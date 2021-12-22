class Plane {
	constructor(flightNumber, origin,destination, airline){
		this.flightNumber = flightNumber,
        this.origin = origin,
        this.destination = destination,
        this.airline = airline,
        this.crew = {pilots: [], flightAttendants: []},
		this.passengers = []
        
	}





    boardPlane(person){
		
        if (person.role === "Pilot"){

            this.crew.pilots.push(person)
            
        }  if (person.role === "Flight Attendant"){

            this.crew.flightAttendants.push(person)

        }

        if (person.role === "Passenger") {

            this.passengers.push(person)
        }

        
	}
}



module.exports = Plane