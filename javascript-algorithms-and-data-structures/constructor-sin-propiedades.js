//
// Constructor sin propiedades, solo métodos
//

const Person = function(firstAndLast) {

	let firstName = firstAndLast.split(" ",1)[0];
	let lastName = firstAndLast.split(" ",2)[1];

  this.getFullName = function() {
    return (firstName+" "+lastName);
  };

	this.getFirstName = function() {
		return firstName;
	}

	this.getLastName = function() {
		return lastName;
	}

	this.setFullName = function(firstAndLast) {
		firstName = firstAndLast.split(" ",1)[0];
		lastName = firstAndLast.split(" ",2)[1];
	}

	this.setFirstName = function(first) {
		firstName = first;
	}

	this.setLastName = function(last) {
		lastName = last;
	}

};

const bob = new Person('Bob Ross');
