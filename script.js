const display = document.getElementById("entry")
let string = "", lastPressedButton = null

function addSymbol(symbol) {
    if(lastPressedButton === "e") {
        deleteAll()
        display.value += symbol
        string = string + symbol
        lastPressedButton = string.slice(-1)
    }
    else if(lastPressedButton === "=") {
        string = display.value
        display.value += symbol
        string = string + symbol
        lastPressedButton = string.slice(-1)
    }
    else {
        display.value += symbol
        string = string + symbol
        lastPressedButton = string.slice(-1)
    }
}

function deleteOne() {
    if(lastPressedButton === "=" || lastPressedButton === "e") {
        deleteAll()
    }
    else {
        lastPressedButton = string.slice(-1)
        string = string.slice(0, string.length-1)
        display.value = string
    }
}

function deleteAll() {
    lastPressedButton = "C"
    string = ""
    display.value = ""
}

function calculate() {
    lastPressedButton = "="

    string = string.replaceAll("x", "*")
    string = string.replaceAll("÷", "/")
    string = string.replaceAll("//", "a")
    try {
        display.value = eval(string)
        if(display.value === "Infinity") {  
            display.value = "IMPOSSIBLE"
            lastPressedButton = "e"
        }
        else if(isNaN(display.value)) {
            display.value = "UNDEFINED"
            lastPressedButton = "e"
        }
    }
    catch(error) {
        display.value = "INVALID SYNTAX"
        lastPressedButton = "e"
    }
}