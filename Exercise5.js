//find the correct inputs in the html
var x = document.getElementsByName("fname");
var y = document.getElementsByName("lname");

//get the current values and return them on the console
function getFormvalue(){
    console.log(x[0].value)
    console.log(y[0].value)
}