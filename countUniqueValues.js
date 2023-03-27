//Make a function that accepts a sorted array and counts
//the unique values in the array. There can be negative numbers
//in the array, but it will always be sorted.
const countUniqueValues = (arr) => {
    let j;
    let counter = 0;
        for(let i=0; i<arr.length; i++){
            if(arr[i] !== arr[j]){
            j = i;
            counter++;
        }
    }
        return console.log(counter)
}
countUniqueValues([1,1,1,2,3,3,3,7,8,10,123,145])