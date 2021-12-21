class Bag {
	constructor(tag, passenger,checked){
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
        
	}

	
}

module.exports = Bag