const Person = require("./Person");

class Crew extends Person {

constructor(name, role){
 
    super(name), 
    this.role = role

    

}

workHere() {

return 'I work here...'

}

}


module.exports = Crew