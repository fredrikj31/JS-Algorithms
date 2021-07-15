class HashTable {

	table = new Array(3);
	numItems = new Number(0);

	generateHash = (key, tableLength) => {
		let hash = new Number(101);

		for (let i = 0; i < key.length; i++) {
			hash = (131 * hash * key.charCodeAt(i)) % tableLength;
		}

		return hash;
	}

	resizeTable = () => {
		const newTable = new Array(this.table.length * 2);
		this.table.forEach((item) => {
			if (item) {
				item.forEach(([key, value]) => {
					const index = this.generateHash(key, newTable.length);

					if (newTable[index]) {
						newTable[index].push([key, value]);
					} else {
						newTable[index] = [[key, value]]
					}
				});
			}
		});

		this.table = newTable;
	}

	selectItem = (key) => {
		const index = this.generateHash(key, this.table.length);

		if (!this.table[index].find(x => x[0] === key)) {
			return null;
		} else {
			return this.table[index].find(x => x[0] === key)[1];
		}

	}
	
	insertItem = (key, value) => {
		this.numItems++;
		
		// Check if the table is running out of space
		const loadFactor = this.numItems / this.table.length;
		if (loadFactor > 0.8) {
			this.resizeTable();
		}

		// Declare the index so it doesn't needs to be calculated again
		const index = this.generateHash(key, this.table.length)

		if (this.table[index]) {
			this.table[index].push([key, value]);
		} else {
			this.table[index] = [[key, value]]
		}
	}

	deleteItem = (key) => {
		const index = this.generateHash(key, this.table.length);
		const arrayIndex = this.table[index].indexOf(this.table[index].find(x => x[0] === key))

		this.table[index].splice(arrayIndex, 1);
	}
}

let myTable = new HashTable();

myTable.insertItem("firstName", "John");
myTable.insertItem("lastName", "Doe");
myTable.insertItem("age", 2);
myTable.insertItem("birth", "1/2/3");

//myTable.deleteItem("firstName");

console.log(myTable.selectItem("lastName"));

myTable.deleteItem("lastName")

console.log(myTable.table);