
//function to find product and sum of array

function productAndSum(array){
    let sum = 0;
    let product = 1;
    // if statement to check array not empty
    if (array.length>0){
        //for loop to loop array values
        for (i in array) {
        
            sum+=array[i];
            product*=array[i];
        }
        console.log("Sum of numbers is: "+sum);
        console.log("Product of numbers is : "+product);
    }
    else{
        console.log("array empty");
    }
    

};