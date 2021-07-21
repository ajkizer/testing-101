//Write a function that will take 2 arguments, an array of numbers and a target sum, also a number.  The return value will be the indices of the numbers which, when added together, are equal to the target sum.

//Constraint Questions
/*

    -What if the array contains none or only 1 value?  A: Return null.
    -What if there are no numbers that add up to the target sum? A: Return null
    -What if the array has multiple numbers that will result in the sum? A: Only one solution will exist.

*/


const findPairSum = (nums,target) => {

    //validate
    if(nums.length <= 1) return null


    //initialize hashmap
    const numsMap = {}
  


    //loop through array to find values, referencing the hashmap to check for solution
    for(let p = 0; p < nums.length; p++) {
        const currentMapVal = numsMap[nums[p]];

        if(currentMapVal === undefined) {
            const numberToFind = target - numsMap[p]
        }
    }


    return null;
}



    // for(let i = 0; i < arrCopy.length; i++){
    //     let numNeeded = target - arrCopy[i]
    //     let numIndex = arrCopy.indexOf(numNeeded)
    //     if(numIndex === -1){
    //         continue
    //     } else {
    //         vals = [numIndex, i]
    //     }
    // }


module.exports = findPairSum;



    // const numsMap = {};
  
    // for(let p = 0; p < nums.length; p++) {
    //   const currentMapVal = numsMap[nums[p]];
    
  
    //   if(currentMapVal !== undefined) {
    //     return [currentMapVal, p];
    //   } else {
    //     const numberToFind = target - nums[p];
    //     numsMap[numberToFind] = p;
    //   }
    // }
  