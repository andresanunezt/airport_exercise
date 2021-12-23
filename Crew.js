const Person = require("./Person");

class Crew extends Person {

constructor(name, role){

    super(name, role)
    
}
    



        workHere() {

                return `I work here... I am a ${this.role}`

        }

        greeting() {

                if(this.role === "Flight Attendant"){
                        
                    return "Fasten your seatbelt!"

                }


                if(this.role === "Pilot"){
                    return "Can't wait to take off!"

            }

        }
   
    

}



module.exports = Crew