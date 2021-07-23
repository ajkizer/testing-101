const lengthOfSubarray = require("./degreeOfAnArray");

test("Returns the correct length of subarray #1", () => {
    const array =  [1, 2, 3, 3, 5, 6, 4, 3, 8, 3];
    const answer = 8
    expect(lengthOfSubarray(array)).toEqual(answer)
});



test("Returns the correct length of subarray #2", () => {
    const array =  [1,2,2,4,4,4,5]
    const answer = 3
    expect(lengthOfSubarray(array)).toEqual(answer)
})


test("Returns the correct length of subarray #3", () => {
    const array =  [1,2,3,4,5,4,8,4]
    const answer = 5
    expect(lengthOfSubarray(array)).toEqual(answer)
})