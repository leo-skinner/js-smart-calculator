var btnCalculate = document.querySelector("#btn-calculate-id")
btnCalculate.addEventListener("click", function (event) {
    event.preventDefault()

    var num1 = Number(document.querySelector("#num1-id").value)
    var num2 = Number(document.querySelector("#num2-id").value)

    //Calculations...when magic happens!
    var plus = num1 + num2
    var minus = num1 - num2
    var division = num1 / num2
    var multiplication = num1 * num2
    var remainder = num1 % num2
    var exponentiation = num1 ** num2

    //results.
    document.querySelector("#result-plus-id").innerHTML = plus
    document.querySelector("#result-minus-id").innerHTML = minus
    document.querySelector("#result-division-id").innerHTML = division
    document.querySelector("#result-multiplication-id").innerHTML = multiplication
    document.querySelector("#result-remainder-id").innerHTML = remainder
    document.querySelector("#result-exp-id").innerHTML = exponentiation
})

//reset button
var btnReset = document.querySelector("#btn-reset-id")
btnReset.addEventListener("click", function (event) {
    event.preventDefault()

    document.querySelector("#result-plus-id").innerHTML = ''
    document.querySelector("#result-minus-id").innerHTML = ''
    document.querySelector("#result-division-id").innerHTML = ''
    document.querySelector("#result-multiplication-id").innerHTML = ''
    document.querySelector("#result-remainder-id").innerHTML = ''
    document.querySelector("#result-exp-id").innerHTML = ''

})