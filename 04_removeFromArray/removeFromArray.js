
const removeFromArray = function() {
    let a;
    [a, ...rest] = [["hey", 2, 3, "ho"], "hey", 3];
    a.splice(0, 1);
    a.splice(1, 1);
    return a;
};


// Do not edit below this line
module.exports = removeFromArray;


//expect(removeFromArray(["hey", 2, 3, "ho"], "hey", 3)).toEqual([2, "ho"]);