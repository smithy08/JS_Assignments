//console.log(is_weekend('Nov 15, 2014'));
//console.log(is_weekend('Nov 16, 2014'));
//console.log(is_weekend('Nov 17, 2014'));

function is_weekend(str){

    //convert the string to date object
    date = new Date(str);

    //use date object get day to workout if its a weekend
    if(date.getDay() == 6 || date.getDay() == 0) {
        return "weekend";
    };
    
    else{
        return "not weekend";
    }

}

//tests
console.log(is_weekend('Nov 15, 2014'));
console.log(is_weekend('Nov 16, 2014'));
console.log(is_weekend('Nov 17, 2014'));
