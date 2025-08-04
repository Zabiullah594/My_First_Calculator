
function buttonClick(val){

    let cal = document.getElementById("cal");

    let lastChar = cal.value.slice(-1);

    if((lastChar === "+" && val === "+") || (lastChar === "-" && val === "-") || (lastChar === "*" && val === "*") || (lastChar === "/" && val === "/") || (lastChar === "%" && val === "%") || (lastChar === "." && val === ".")) {
        cal.value = cal.value.slice(0, -1);
    }
    else if(val === "=") {
        isEqual = cal.value = eval(cal.value);
        cal.value = eval(cal.value);
        equal = true;
    }
    else if(val == "C" || val == "CE") {
        cal.value = "";
    }
    else if(val == "<-") {
        cal.value = cal.value.slice(0, -1);
    }
    else {
        cal.value += val;
    }
}
