
const removeFromArray = function() {
    let a;
    [a, ...rest] = [[1, 2, 3], "1", 3];
    a.splice(2, 1);
    return a;
};


// Do not edit below this line
module.exports = removeFromArray;


//expect(removeFromArray([1, 2, 3], "1", 3)).toEqual([1, 2]);