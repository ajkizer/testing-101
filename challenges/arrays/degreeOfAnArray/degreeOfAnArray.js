const lengthOfSubarray = array => {
    let length = 0;
    let degree = 0;

    const genNumMap = arr => {
        const numMap = {};

        for(let i=0; i < arr.length; i++) {
            const key = arr[i]

            if(numMap[key] === undefined){
                numMap[key] = {
                    firstIndex: i,
                    finalIndex: i,
                    count: 1
                }
            } else {
                numMap[key] = {
                    ...numMap[key],
                    finalIndex: i,
                    count: numMap[key].count +1
                }
            }
        }
        return numMap
    }

        const numMap = genNumMap(array)


        for(let [key, value] of Object.entries(numMap)){
            if(numMap[key].count > degree){
                degree = key
            }
        }

        length = numMap[degree].finalIndex - numMap[degree].firstIndex + 1
        console.log(length)
        return length;
}



module.exports = lengthOfSubarray