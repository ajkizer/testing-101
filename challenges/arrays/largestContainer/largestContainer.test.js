const largestContainer = require("./largestContainer");

test("returns 0 if array has a length of 0", () => {
    const array = []
    expect(largestContainer(array)).toEqual(0)
})
   

test("returns 0 if array has a length of 1", () => {
    const array = [2]
    expect(largestContainer(array)).toEqual(0)
})

test("returns the area of the largest container #1", () => {
    const array = [1,2,3];
    expect(largestContainer(array)).toEqual(2)
})


test("returns the area of the largest container #2", () => {
    const array = [6,9,3,4,5,8];
    expect(largestContainer(array)).toEqual(32)
})