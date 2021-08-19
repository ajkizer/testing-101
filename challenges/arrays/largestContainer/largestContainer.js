const largestContainer = (array) => {

    let max = 0;

    if(array.length <= 1) return max;



    //optimized (O(n))
    let a = 0;
    let b = array.length - 1;


    while(a < b) {
        const height = b - a;
        const width = Math.min(array[a],array[b]);
        const area = height * width;


        if(area > max){
            max = area
        }

        if(array[a] < array[b]){
            a++
        } else {
            b--
        }
    }


    


    // brute force (O(n^2))

    // for(let p = 0; p < array.length; p++) {
    //     for(let p2 = 1; p2 < array.length; p2++){
    //         const length = p2 - p;
    //         console.log({length});
    //         const width = Math.min(array[p], array[p2]);

   

    //         const area = length * width;
    //         if(area > max) {
    //             max = area
    //         }
    //     }
    // }

    return max
}

module.exports = largestContainer;