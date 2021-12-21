class Bag {
	constructor(tag, passenger,checked, weight){
		this.tag = tag,
        this.passenger = passenger
		if (checked == true){
			this.checked = true,
			this.carryOn = false
		}
		else if (checked == false) {
			this.checked = false,
			this.carryOn = true
		}

		
		if (weight < 51){
			this.fee = "Regular"
		}	else if (weight > 51) {
			this.fee = "Extra"
		}
        
	}

	
}

module.exports = Bag