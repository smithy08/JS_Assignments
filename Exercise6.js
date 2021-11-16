//find the dropdown
var x = document.getElementById("colorSelect");

//remove the currently selected item
function removecolor(){
    x.remove(x.selectedIndex);
}