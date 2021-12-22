const Person = require("./Person");

class Crew extends Person {

constructor(name, role){
 
    super(name)
    this.role = role

    Crew.all.push(this)

}

}


module.exports = Crew