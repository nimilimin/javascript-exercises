const removeFromArray = function(theArr,...rmVal) {
	theArr = theArr.filter(item => !rmVal.includes(item));
	return theArr;
};

// Do not edit below this line
module.exports = removeFromArray;
