class Person {
	
	constructor(name){
		
		this.setName(name);
		
	}
	
	setName(newName){
		
		this.name = newName;
		
	}
	
	getName() {
		
		return this.name;
		
	}
	
}

let details = new Person("karthi");

console.log(details.name);

details.setName("mani");

console.log(details.getName());
