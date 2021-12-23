class Airport {
	constructor(name, location){
		this.name = name,
        this.location = location,
        this.terminals = []
		this.planes = []
        
	}

	addPlane(plane) {
		this.planes.push(plane)
	}
	
}

module.exports = Airport