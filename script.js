/* Declaring/assigning 2 variables to select the element 
that matches it's specific CSS selector */

let textbox = document.getElementById('textbox');
let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map(button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            
            default:
                textbox.innerText += e.target.innerText;
        }
    });
});