let calculation = localStorage.getItem("calculation") || "";

display();

function pressedKey(key) {
    
    if (key === "equal") {
        if (calculation === "") {
            calculation = "0";
            localStorage.setItem("calculation", calculation);
        }
        else {
            calculation = eval(calculation);
            localStorage.setItem("calculation", calculation);
        }
    } 
    else {
        calculation += key;
        
    }
}

function dispalyCalculation(key) {
    if (key === "AC") {
        calculation = "";
        localStorage.setItem("calculation", calculation);
        document.querySelector("#displayArea").value = "0";
        return;
    }
    if(key === 'delete' && calculation != "" && calculation != "0"){
        calculation = calculation.slice(0,-1);
        localStorage.setItem("calculation", calculation);
        display();
        return;
    }
    if(key!== 'delete'){
        pressedKey(key);
    }
    
    display();
}

function display() {
    document.querySelector("#displayArea").value = calculation;
}
