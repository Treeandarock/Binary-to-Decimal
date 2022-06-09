// x = document.getElementById("Binary").value

function BinaryToDecimal() {
    number = document.getElementById("Binary").value
    sum = 0
    for(x = 0; x < number.length; x++){
        sum = parseInt(number[x]) * 2**(number.length-x-1) + sum
    }
    document.getElementById("Decimal").value = (sum)
}
