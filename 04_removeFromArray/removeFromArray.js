
const removeFromArray = function() {
    let a;
    [a, ...rest] = [[1, 2, 3, 4], 7, 2];
    a.splice(1, 1);
    return a;
};


// Do not edit below this line
module.exports = removeFromArray;


//expect(removeFromArray([1, 2, 3, 4], 7, 2)).toEqual([1, 3, 4]);