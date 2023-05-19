const sumAll = function(num1, num2) {
    let smallerNum = 0;
    let greaterNum = 0;
    if (typeof num1 !== 'number' || typeof num2 !== 'number'){
        return 'ERROR';
    }
    if (num1 < 0 || num2 < 0){
        return 'ERROR';
    }
    if (num1 > num2){
        smallerNum = num2;
        greaterNum = num1;
    }
    else if (num2 > num1){
        smallerNum = num1;
        greaterNum = num2;
    }
    let sum = 0;
    for (let i = smallerNum; i<= greaterNum; i++){
        sum += i;
    };
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
