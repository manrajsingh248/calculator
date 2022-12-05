let textbox = document.getElementById('textbox');

let buttons = Array.from(document.getElementsByClassName('button'));

buttons.map( button => {
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                textbox.innerText = '';
                break;
            
            case 'DEL':
                if(textbox.innerText) {
                    textbox.innerText = textbox.innerText.slice(0, -1);
                    break; 
                }
            
            case '=':
                try{
                    textbox.innerText = eval(textbox.innerText);
                }
                catch { 
                    textbox.innerText = "Error";
                }
                break; 

            
            default:
              textbox.innerText += e.target.innerText;



        }
    });
});