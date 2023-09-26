const sumAll = function(start,end) {
	result = 0;
	if(typeof(start)!="number" || typeof(end)!="number"){
		return "ERROR";
	}

	if(end<start){
		temp = end;
		end = start;
		start = temp;
	}

	if(start<0){
		return "ERROR";
	}

	for(i=start;i<end+1;i++){
		result+=i;
	}
	return result;
};

// Do not edit below this line
module.exports = sumAll;
