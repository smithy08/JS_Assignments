var library = [ 
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    
    },
    
    {
        author: 'Suzanne Collins',
        title:  'Mockingjay: The Final Book of The Hunger Games', 
        readingStatus: false
    
    }
];

function display_books(){
    for (let i of library){
        
        console.log(`${i.title} by ${i.author} has a current reading status of ${i.readingStatus}`);
    }
}

display_books()