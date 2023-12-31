function isNumberEven(num) {
    if (num % 2 === 0) {
        return true
    }

    return false;
};

function addNumbers(num1, num2) {

    if(!num1 || !num2){
        throw new Error('Enter the numbers to add');
    }
    if(typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new Error('Enter valid number');
    }
    return num1 + num2;
}

module.exports = { isNumberEven, addNumbers };