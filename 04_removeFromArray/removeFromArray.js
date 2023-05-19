const removeFromArray = function(array, ...num) {
    let newArray = array.filter(function(item) {
        return !num.includes(item);
    });
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
