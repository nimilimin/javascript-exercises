const repeatString = function(theStr,num) {
	retVal = ""
	if(num<0){return "ERROR";}
	for(i=0;i<num;i++){
		retVal = retVal + theStr;
	}
	return retVal;
};

// Do not edit below this line
module.exports = repeatString;
