//test object
var library = [ 
    {
        author: 'ABill Gates',
        title: 'bThe Road Ahead',
        readingStatus: true
    },
    
    {
        author: 'Steve Jobs',
        title: 'ACWalter Isaacson',
        readingStatus: true
    
    },
    
    {
        author: 'Suzanne Collins',
        title:  'AAMockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    
    }
]; 

function sortByTitle(arrOfObj){
    arrOfObj.sort(function(a, b) {
        //convert to uppercase so doesnt take into account for differences
        var title1 = a.title.toUpperCase();
        var title2 = b.title.toUpperCase();
        //return -1 if title 1 bigger, 1 if title2 bigger or 0 if they're the same
        return (title1 < title2) ? -1 : (title1 > title2) ? 1 : 0;
    });

    return arrOfObj;
}
//print to test
console.log(sortByTitle(library));