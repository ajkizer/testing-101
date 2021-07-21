const findPairSum = (nums,target) => {
    const numsMap = {};
  
    for(let p = 0; p < nums.length; p++) {
      const currentMapVal = numsMap[nums[p]];
  
      if(currentMapVal >= 0) {
        return [currentMapVal, p];
      } else {
        const numberToFind = target - nums[p];
        numsMap[numberToFind] = p;
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