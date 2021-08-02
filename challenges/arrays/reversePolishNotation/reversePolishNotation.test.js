const reversePolishNotation  = require("./reversePolishNotation")


const testArrays = [{
    input: ["2","1","+","3","*"],
    output: 9
},{
    input: ["4","13","5","/","+"],
    output: 6
},{
    input: ["10","6","9","3","+","-11","*","/","*","17","+","5","+"], 
    output: 22 
}]



test("returns correct value", () => {
   expect(reversePolishNotation(testArrays[0].input)).toEqual(testArrays[0].output)
})



test("returns correct value", () => {
    expect(reversePolishNotation(testArrays[1].input)).toEqual(testArrays[1].output)
 })

 
test("returns correct value", () => {
    expect(reversePolishNotation(testArrays[2].input)).toEqual(testArrays[2].output)
 })