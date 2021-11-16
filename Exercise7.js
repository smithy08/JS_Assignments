//html to show this working is in the HTML_4_Exercise7.html file

//find bold text we want to edit 
let bold = document.getElementsByTagName("b")[0];



//when hovering over the text add the mark tags to highlight the text
bold.addEventListener("mouseenter", function () {

    bold.innerHTML="<mark>olducimus in sint ipsum alias modi perferendis<mark>";

    }
)

//when no longer hovering remove the highlight
bold.addEventListener("mouseout", function () {

    bold.innerHTML="olducimus in sint ipsum alias modi perferendis";

    }
)
