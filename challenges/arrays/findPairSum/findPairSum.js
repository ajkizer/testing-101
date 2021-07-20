const findPairSum = (arr,target) => {
    let vals = null;
    if(arr.length <= 1) return vals


    //make copy and sort
    let arrCopy = arr;
    // arrCopy.sort();



    for(let i = 0; i < arrCopy.length; i++){
        let numNeeded = target - arrCopy[i]
        let numIndex = arrCopy.indexOf(numNeeded)
        if(numIndex === -1){
            continue
        } else {
            vals = [numIndex, i]
        }
    }
 

    console.log(vals);



    return vals
}


module.exports = findPairSum;