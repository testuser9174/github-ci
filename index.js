function isNumberEven(num) {
    if (num % 2 === 0) {
        return true
    }

    return false;
};

function addNumbers(num1, num2) {
    return num1 + num2;
}

module.exports = { isNumberEven, addNumbers };