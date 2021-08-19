/*

Evaluate the value of an arithmetic expression in Reverse Polish Notation.

Valid operators are +, -, *, and /. Each operand may be an integer or another expression.

Note that division between two integers should truncate toward zero.

It is guaranteed that the given RPN expression is always valid. That means the expression would always evaluate to a result, and there will not be any division by zero operation.

 

Example 1:

Input: tokens = ["2","1","+","3","*"]
Output: 9
Explanation: ((2 + 1) * 3) = 9
Example 2:

Input: tokens = ["4","13","5","/","+"]
Output: 6
Explanation: (4 + (13 / 5)) = 6
Example 3:

Input: tokens = ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
Output: 22
Explanation: ((10 * (6 / ((9 + 3) * -11))) + 17) + 5
= ((10 * (6 / (12 * -11))) + 17) + 5
= ((10 * (6 / -132)) + 17) + 5
= ((10 * 0) + 17) + 5
= (0 + 17) + 5
= 17 + 5
= 22




*/



const reversePolishNotation = (array) => {
    let answer = null;
    let leftOver = [];

    const isOperator = string => {
        const operators = ["+", "-", "/", "*"]
        if(operators.includes(string)){
            return true
        }
        return false
    }


    const runOperation = (operator, num1, num2) => {
        const operators = {
            "+": num1 + num2,
            "-": num1 - num2,
            "/": Math.floor(Math.abs(num2 / num1)),
            "*": num1 * num2
        }
        return operators[operator]
    }


    const evaluate = (item) => {    
        let num1;
        let num2;

        if(answer === null) {
            num1 = Number(leftOver[leftOver.length-1])
            num2 = Number(leftOver[leftOver.length-2])
            leftOver.pop();
            leftOver.pop();
            answer = runOperation(item, num1, num2)
        } else {
            num1 = answer
            num2 = Number(leftOver[leftOver.length-1])
            leftOver.pop()
            answer = runOperation(item, num1, num2)
        }
    }

    
    array.forEach(item => {
        if(isOperator(item)){
            evaluate(item)
        } else {
            leftOver.push(item)
        }
    })

    return answer
}


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

testArrays.forEach(testCase => {
    console.log(reversePolishNotation(testCase.input))
})


module.exports = reversePolishNotation