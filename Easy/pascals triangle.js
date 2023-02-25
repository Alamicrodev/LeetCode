// Given an integer numRows, return the first numRows of Pascal's triangle.

// In Pascal's triangle, each number is the sum of the two numbers directly above it as shown:

// Example 1:
// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]

// Example 2:
// Input: numRows = 1
// Output: [[1]]


// ---------------------- My Solution ----------------------------------

var nextStepGen = function(step){

    let newStep = []
    if (step.length != 1){
        for (let i = 0; i < step.length-1; i++) {
            newStep.push(step[i]+step[i+1])
        }
    }
    newStep.unshift(1)
    newStep.push(1)
    return newStep
}

var generate = function(numRows) {
    let pascalTriangle = []
    let currentStep = [1]
    for (i = 0; i < numRows; i++) {
        pascalTriangle.push(currentStep)
        currentStep = nextStepGen(currentStep)
    }

    return pascalTriangle
};