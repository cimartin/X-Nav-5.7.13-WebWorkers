self.onmessage = function(event) {
	var primeList = "";
	var n = 0;
	var size = 0;
	search: while(n < event.data) {
		n += 1;
		for(var i = 2; i <= Math.sqrt(n); i += 1) 
			if(n % i == 0) 
				continue search;
		primeList += " " + n;
		size++;
		if(size == 500) {
			self.postMessage(primeList);
			primeList = "";
			size = 0;
		}	
	}
	self.postMessage(primeList);
}