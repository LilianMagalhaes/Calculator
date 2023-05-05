
//*********************** SCRIPT DRAWERS ********************//     
        function openNav() {
            document.getElementById("mySideDrawer").style.width = "300px";
            document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
        }

        function closeNav() {
            document.getElementById("mySideDrawer").style.width = "0";
            document.body.style.backgroundColor = "white";
        }

        function openFoot() {
            document.getElementById("mySlideUpDrawer").style.top = "60%";
        }

        function closeFoot() {
            document.getElementById("mySlideUpDrawer").style.top = "100%";
            document.body.style.backgroundColor = "white";
        }

        function clock() {
            let clock = document.getElementById('time');
            clock.textContent = new Date().toString();
        }
        setInterval(clock, 1000);
   
//********************** SCRIPT CALCULATOR *******************//

document.addEventListener("DOMContentLoaded", () => {
    let hasClickedEqual = false;
    let output = document.getElementById("output");
    const inputs = Array.from(document.getElementsByClassName('calculatorInput')) // [htmls]
                
    inputs.forEach(element => {
        element.addEventListener('click', (event) => {
            const validOperators = ['+', "-", "÷", "x", "/", "*"];
            const validNumbers = ["0", "1", "2", "3", "4", "5","6", "7", "8", "9"];
            const openBracket = ["("];
            const closeBracket = [")"];
            const firstCharacter = output.value.slice(0);
            const lastCharacter = output.value.slice(-1);
            const nextCharacter = event.target.value;
            const isFirstCharacterOperator = validOperators.includes(firstCharacter);
            const isLastCharacterOperator = validOperators.includes(lastCharacter);
            const isNextCharacterOperator = validOperators.includes(nextCharacter);
            const isNextCharacterNumber = validNumbers.includes(nextCharacter);
            const isFirstCharacterCloseBracket = closeBracket.includes(firstCharacter);
            const isNextCharacterOpenBracket = openBracket.includes(nextCharacter);
            const isLastCharacterOpenBracket = openBracket.includes(lastCharacter);           

            if(isNextCharacterNumber && hasClickedEqual) { //reset output when the next click after equals is a number.
            output.value = "";
            }

            hasClickedEqual = false;

            if (isFirstCharacterOperator ||(isLastCharacterOperator && isNextCharacterOperator)) {  //validate operators
            return;
            }

            if (isFirstCharacterCloseBracket && isNextCharacterOpenBracket 
                ||(isLastCharacterOpenBracket && isNextCharacterOpenBracket)) { //validate brackets
            return;
            }
                                
            output.value +=  event.target.value.replaceAll('*', 'x');
        });
    })
            
    function printSymbol() {
        let output = document.getElementById("output");
        let obj = event.target;
        output.value = output.value + obj.value;
    }

    equals.addEventListener("click", () => {  //equals button
    let translatedOutput = output.value.replaceAll('x', '*');
    console.log(translatedOutput);
    output.value = eval(translatedOutput);
    hasClickedEqual = true;
    })

    clear.addEventListener("click", () => {  //clear (C) button
    output.value = "";
    }); 

    del.addEventListener("click", () => {  //delete (<--) button
    let deleteLastChar = output.value.slice(0, -1); 
    output.value = deleteLastChar;   
    });
});
  //********************** LILIAN MAGALHAES - DECEMBRE 2022 *******************//