/*Function receive a two-dimensional square array of random integers. On the main diagonal, all the negative integers must be changed to 0, while the others must be changed to 1 (Note: 0 is considered non-negative, here).

Do not mutate the input array.

Example:

Input array

[
  [-1,  4, -5, -9,  3 ],
  [ 6, -4, -7,  4, -5 ],
  [ 3,  5,  0, -9, -1 ],
  [ 1,  5, -7, -8, -9 ],
  [-3,  2,  1, -5,  6 ]
]
Output array

[
  [ 0,  4, -5, -9,  3 ],
  [ 6,  0, -7,  4, -5 ],
  [ 3,  5,  1, -9, -1 ],
  [ 1,  5, -7,  0, -9 ],
  [-3,  2,  1, -5,  1 ]
]
*/

const change2dArray = (array) =>{
    let arrayCopy = [...array];
    
    
    arrayCopy.map((item, idx) => {
      if(item[idx] < 0){
        item[idx] = 0
      } else {
        item[idx] = 1
      }
    })
    
    
    return arrayCopy
    
  }


  module.exports = change2dArray;