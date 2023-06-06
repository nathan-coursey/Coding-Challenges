class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	compareAge(other) {
		let compare;
		if (this.age > other.age) {
			compare = "younger than";
		} else if (this.age < other.age) {
			compare = "older than";
		} else {
			compare = "the same age as";
		}
		return `${other.name} is ${compare} me.`;
	}
}
