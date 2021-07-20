const findPairSum = require("./findPairSum");

test("returns null if array length is 1", () => {
    let array = [15];
    let target = 15;

    expect(findPairSum(array, target)).toEqual(null)
})


test("returns null if array is empty", () => {
    let array = [];
    let target = [10]

    expect(findPairSum(array, target)).toEqual(null)
})

test("returns correct indices of the values that sum up to the target", () => {
    let array = [1,3,4,5];
    let target = 4;
    let answer = [0,1]

    expect(findPairSum(array, target)).toEqual(answer)

    array = [1,2,3,5];
    target = 5;
    answer = [1,2]

    expect(findPairSum(array, target)).toEqual(answer);


    array = [3,5,9,10];
    target = 15;
    answer = [1,3]

    expect(findPairSum(array, target)).toEqual(answer);
})

test("returns correct indices of the values that sum up to the target #2", () => {


    let array = [1,2,3,5];
    let target = 5;
    let answer = [1,2]

    expect(findPairSum(array, target)).toEqual(answer);
})

test("returns correct indices of the values that sum up to the target #3", () => {


    let array = [3,5,9,10];
    let target = 15;
    let answer = [1,3]

    expect(findPairSum(array, target)).toEqual(answer);
})




test("returns null if no values add up to the target", () => {
    let array = [1,3,5,9];
    let target = 25;
    let answer = null

    expect(findPairSum(array, target)).toEqual(answer);
})