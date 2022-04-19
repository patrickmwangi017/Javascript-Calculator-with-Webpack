import '../css/style.css';
//  save a reference to display element
let display = document.getElementById('display');

// store button references in array
// from is used to convert returned node collection to array
let buttons = Array.from(document.getElementsByClassName('button'));

/* add event listeners to buttons by mapping through the array and 
   adding a click event listener to each 
 */
buttons.map( button => {
    button.addEventListener('click', (e) => {

        // get label of clicked button
        switch(e.target.innerText){

            // clear display oc button clicked is C
            case 'C':
                display.innerText = '';
                break;

            // use eval to evaluate and display the result if equals is clicked
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                    alert("The Result obtained is " + " " + eval(display.innerText))
                } catch {

                    // Erros can happen when we have syntactically wrong math expressions
                    display.innerText = "Error"
                }
                break;

                // remove the last character from the display's innerText if back arrow is clicked
            case '←':
                if (display.innerText){
                   display.innerText = display.innerText.slice(0, -1);
                }
                break;

            // append the clicked button's innerText to the display's innerText
            //  whenever the user don't hit any of the special symbols
            default:
                display.innerText += e.target.innerText;
        }
    });
});
