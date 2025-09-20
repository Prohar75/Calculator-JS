export function calculator(){
    const buttonValues = [
        "AC", "±", "%", "÷",
        "7","8","9","×",
        "4","5","6","-",
        "1","2","3","+",
        "0",".","="
    ];
    
    const rightSymbols = ["÷","×","-","+","="];
    const topSymbols = ["AC", "±", "%"];

    let A = 0;
    let operator = null;
    let B = null;

    function clearAll() {
        A = 0;
        operator = null;
        B = null;
    }
    
    for(let i=0; i < buttonValues.length; i++){
        let value = buttonValues[i];
        let button = document.createElement("button");
        button.innerText = value;

        const display = document.getElementById("display");
        const register = document.getElementById("register");
    
    
        button.addEventListener("click", function () {
            if(rightSymbols.includes(value)){
                if (value == "=") {
                    if (A != null) {
                        B = register.value;
                        let numA = Number(A);
                        let numB = Number(B);

                        if (operator == "÷"){
                            if (numB == "0") {
                                register.value = "Error";
                                display.value = "Error";
                            }else{
                                register.value = numA/numB;
                                display.value = register.value;
                            }
                        }
                        else if (operator == "×") {
                            register.value = numA*numB;
                            display.value = register.value;
                        }
                        else if (operator == "-") {
                            register.value = numA-numB;
                            display.value = register.value;
                        }
                        else if (operator == "+") {
                            register.value = numA+numB;
                            display.value = register.value;
                        }
                        clearAll();
                    }
                }
                else {
                    operator = value;
                    A = register.value;
                    register.value = "";
                    display.value += value;
                }
            }
            else if(topSymbols.includes(value)){
                if(value == "AC") {
                    clearAll();
                    register.value = "";
                    display.value = "";
                }
                else if (value == "±"){
                        display.value = display.value.slice(0, display.value.length - register.value.length);
                        register.value *= -1; 
                        display.value += register.value; 
                    }
                }
                else if (value == "%"){
                    register.value = Number(register.value)/100;
                }
            else{
                if(value == ".") {
                    if(register.value != "" && !register.value.includes(value)){
                        register.value += value;
                        display.value += value;
                    }
                }
                else if (register.value == "0"){
                    register.value = value;
                    display.value = value;
                }
                else{
                    register.value += value;
                    display.value += value;
                }
            }
        });
    
        if(value == "0"){
            button.style.gridColumn = "span 2";
            button.style.width = "208px";
        }
        if (rightSymbols.includes(value)) {
            button.style.backgroundColor = "#ffae3cff";
        }
        else if (topSymbols.includes(value)) {
            button.style.backgroundColor = "#d6d6d6ff";
            button.style.color = "black";
        }

        document.getElementById("buttons").appendChild(button);
    }

}