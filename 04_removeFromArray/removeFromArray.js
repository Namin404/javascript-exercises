
const removeFromArray = function(a) {
    a.splice(0, a.length);
    return a;
};


// Do not edit below this line
module.exports = removeFromArray;


//expect(removeFromArray([1, 2, 3, 4], 1, 2, 3, 4)).toEqual([]);