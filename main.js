// For changing theme
const left = () => document.documentElement.setAttribute("data-theme", "left");
const mid = () => document.documentElement.setAttribute("data-theme", "mid");
const right = () => document.documentElement.setAttribute("data-theme", "right");
// Taking values from the keys
const inputKey = document.form.screen;

// Inserting values to the display 
const insertNum = (num) => {inputKey.value += num};

// Performimg operations using eval()
const equalTo = () => {
    if((inputKey.value).indexOf("sin") > -1){
        inputKey.value = Math.sin(inputKey.value.slice(3, inputKey.value.length));
    }
    else if((inputKey.value).indexOf("cos") > -1){
        inputKey.value = Math.cos(inputKey.value.slice(3, inputKey.value.length));
    }
    else if((inputKey.value).indexOf("tan") > -1){
        inputKey.value = Math.tan(inputKey.value.slice(3, inputKey.value.length));
    }
    else if((inputKey.value).indexOf("log") > -1){
        inputKey.value = Math.log(inputKey.value.slice(3, inputKey.value.length));
    }
    else if((inputKey.value).indexOf("e") > -1){
        inputKey.value = Math.exp(inputKey.value.slice(1, inputKey.value.length));
    }
    else if((inputKey.value).indexOf("^") > -1){
        inputKey.value = Math.pow(inputKey.value.slice(0, (inputKey.value).indexOf("^")), inputKey.value.slice((inputKey.value).indexOf("^")+1), inputKey.value.length);
    }  
    else if((inputKey.value).indexOf("⫪") > -1){
        if((inputKey.value).indexOf("*")>-1){
            inputKey.value = (inputKey.value.slice(0, (inputKey.value).indexOf("⫪")-1))*(Math.PI);
        }else if(inputKey.value.slice(0, (inputKey.value).indexOf("⫪")) == 0){
            inputKey.value = Math.PI;
        }else{
            inputKey.value = (inputKey.value.slice(0, (inputKey.value).indexOf("⫪")))*(Math.PI);
        }
    } 
    else if((inputKey.value).indexOf("²") > -1){
        inputKey.value = Math.pow(inputKey.value.slice(0, (inputKey.value).indexOf("²")), 2);
    }
    else if((inputKey.value).indexOf("√") > -1){
        inputKey.value = Math.sqrt(inputKey.value.slice(1, inputKey.value.length));
    } 
    else if((inputKey.value).indexOf("∛") > -1){
        inputKey.value = Math.cbrt(inputKey.value.slice(1, inputKey.value.length));
    }
    else{inputKey.value = eval(inputKey.value)}
};
// To remove one value at a time
const eraseNum = () => inputKey.value = inputKey.value.substring(0, inputKey.value.length-1);

// Reseting all previuos values
const clearAll = () => {inputKey.value = "0"; inputKey.value ="";}

