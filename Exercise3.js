function merge_array(array1,array2){
    let unique_vals=[];
    for (i in array2){
        array1.push(array2[i]);
        
    }

    unique_vals=array1.filter((i,index)=>{
        return array1.indexOf(i)==index;
    })
    return unique_vals;
}


var array1 = [1, 2, 3];
var array2 = [2, 30, 1];
console.log(merge_array(array1, array2));