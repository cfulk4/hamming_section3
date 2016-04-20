var compute;

//compute the hamming distance between 2 DNA strands
compute = function(s1, s2) {
	//this is the hamming dist.
	var distance = 0;

//compute the distance
for (var i = 0; i < s1.length; i++) {
	if (s1 [i] != s2 [i]) {
		distance += 1;
	}

	if (s1.length != s2.length) 
            throw new Error("DNA strands must be of equal length.");
	}
	return distance;
	//return the distance
};

module.exports = {
	compute: compute
};