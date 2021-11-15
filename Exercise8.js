
function month_name(dateObj){
    let month;
    let num=dateObj.getMonth();

    switch (num) {
        case 0:
            month = "January";
            break;
        case 1:
            month = "Febuary";
            break;
        case 2:
            month = "March";
            break;
        case 3:
            month = "April";
          break;
        case 4:
            month = "May";
          break;
        case 5:
            month = "June";
          break;
        case 6:
            month = "July";
          break;
        case 7:
            month = "Auguat";
            break;
        case 8:
            month = "September";
            break;
        case 9:
            month = "October";
            break;
        case 10:
            month = "November";
            break;
        case 11:
            month = "December";
      }

    return month;
}

console.log(month_name(new Date("10/11/2009")));
console.log(month_name(new Date("11/13/2014")));