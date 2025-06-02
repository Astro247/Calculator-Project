const display = document.getElementById("entry")
let string = "", lastPressedButton = null

function addSymbol(symbol) {
    if(lastPressedButton === "error") {
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
    if(lastPressedButton === "=" || lastPressedButton === "error") {
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
    try {
        result = eval(string)
        if(isNaN(result)) {
            throw new Error("UNDEFINED") 
        }
        else if(result === Infinity) {
            throw new Error("IMPOSSIBLE")
        }
        display.value = result
    }
    catch(error) {
        if(error instanceof SyntaxError) {
            display.value = "SYNTAX ERROR"
        }
        else {
            display.value = error.message
        }
        lastPressedButton = "error"
    }
}