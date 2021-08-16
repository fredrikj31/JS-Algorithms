function generatePrimeNumbers(toNumber) {
	let i = 0;
	while (i < toNumber) {
		
		let isPrime = true;
		
		for (let j = 2; j < i; j++) {
			if (i % j == 0) {
				isPrime = false;
			}
		}
		
		console.log(i + " : " + isPrime);
		
		i++;
	}
}

generatePrimeNumbers(10000000000000000000);