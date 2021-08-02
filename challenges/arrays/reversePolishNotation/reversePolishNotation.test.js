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
},
{
    input: ["10", "5", "*", "7", "+", "1", "-"],
    output: 56
},
{
    input: ["15", "25", "33", "+", "-"],
    output: 43
}]


describe("returns correct value", () => {
    test("test", () => {
        expect(reversePolishNotation(testArrays[0].input)).toEqual(testArrays[0].output)
     })
     
     test("test", () => {
         expect(reversePolishNotation(testArrays[1].input)).toEqual(testArrays[1].output)
      })
     
      
     test("test", () => {
         expect(reversePolishNotation(testArrays[2].input)).toEqual(testArrays[2].output)
      })
     
       
     test("test", () => {
         expect(reversePolishNotation(testArrays[3].input)).toEqual(testArrays[3].output)
      })
     
      test("test", () => {
         expect(reversePolishNotation(testArrays[4].input)).toEqual(testArrays[4].output)
      })
})
