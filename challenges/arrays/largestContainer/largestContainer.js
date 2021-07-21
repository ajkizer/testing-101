const largestContainer = (array) => {
    let max = 0;
    if(array.length <= 1) return max;




    for(let p = 0; p < array.length; p++) {
        for(let p2 = 1; p2 < array.length; p2++){
            const length = p2 - p;
            console.log({length});
            const width = Math.min(array[p], array[p2]);

   

            const area = length * width;
            if(area > max) {
                max = area
            }
        }
    }

    return max
}

module.exports = largestContainer;