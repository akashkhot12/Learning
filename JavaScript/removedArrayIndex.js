const array = [1,2,3,4,5];
let position = 3;

for (let index = position; index <= array.length-1; index++) {
        array[index]=array[index-1]   
}
array.length=array.length-1;
console.log(array);